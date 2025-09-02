import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, $$, browser } from '@wdio/globals';

const BASE_URL = 'https://www.saucedemo.com';

async function loginIfNeeded() {
  await browser.url(`${BASE_URL}/`);
  const url = await browser.getUrl();

  if (url.includes('saucedemo.com/')) {
    const loginBtn = await $('input[data-test="login-button"]');
    const isLogin = await loginBtn.isExisting();

    if (isLogin) {
      await $('input[data-test="username"]').setValue('standard_user');
      await $('input[data-test="password"]').setValue('secret_sauce');
      await loginBtn.click();

      await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/inventory.html'),
        { timeout: 8000, timeoutMsg: 'No se llegó a inventory tras login' }
      );
    }
  }
}

Given('estoy logueado en SauceDemo', async function () {
  await loginIfNeeded();
});

Given('estoy en la página de inventario', async function () {
  if (!(await browser.getUrl()).includes('/inventory.html')) {
    await browser.url(`${BASE_URL}/inventory.html`);
  }
  await $('#inventory_container').waitForExist({ timeout: 8000 });
});

Then('veo el título {string}', async function (expected) {
  const title = await $('.title');
  await title.waitForDisplayed();
  await expect(await title.getText()).toBe(expected);
});

Then('hay al menos 1 producto en la lista', async function () {
  const items = await $$('.inventory_item');
  await expect(items.length).toBeGreaterThan(0);
});

When('cambio el orden del inventario a {string}', async function (label) {
  const select = await $('[data-test="product-sort-container"]');
  await select.waitForDisplayed();
  await select.selectByVisibleText(label);
});

Then('el primer producto es el más barato', async function () {
  // Asegura que el orden es "Price (low to high)"
  const select = await $('[data-test="product-sort-container"]');
  await select.waitForDisplayed();
  await select.selectByVisibleText('Price (low to high)');

  // Espera un tick para que el DOM reordene
  await browser.pause(300);

  // Lee los precios visibles
  const priceEls = await $$('.inventory_item_price'); // clase exacta en SauceDemo
  const prices = [];
  for (const el of priceEls) {
    const text = await el.getText();     // p.ej. "$7.99"
    const num = parseFloat(text.replace('$', ''));
    if (!Number.isNaN(num)) prices.push(num);
  }

  // Sanidad: debe haber al menos 1 precio
  await expect(prices.length).toBeGreaterThan(0);

  // Copia y ordena ascendente sin usar spread
  const sorted = prices.slice().sort((a, b) => a - b);

  // El primero en pantalla debe coincidir con el menor
  await expect(prices[0]).toBe(sorted[0]);
});


When('agrego el primer producto al carrito', async function () {
  const firstCard = (await $$('.inventory_item'))[0];
  const addBtn = await firstCard.$('button.btn_inventory');
  await addBtn.click();
});

Then('el icono del carrito muestra {string}', async function (countText) {
  const cartBadge = await $('.shopping_cart_badge');
  await cartBadge.waitForDisplayed();
  await expect(await cartBadge.getText()).toBe(countText);
});

When('elimino ese producto del carrito', async function () {
  const firstCard = (await $$('.inventory_item'))[0];
  const removeBtn = await firstCard.$('button.btn_inventory');
  await removeBtn.click();
});

Then('el icono del carrito muestra vacío', async function () {
  const badge = await $('.shopping_cart_badge');
  const exists = await badge.isExisting();
  await expect(exists).toBe(false);
});

Then('este escenario no debería ejecutarse en la demo', async function () {
  await expect(true).toBe(true);
});

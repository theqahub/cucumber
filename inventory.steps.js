const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');
const axios = require('axios');

console.log('✅ inventory.steps.js cargado correctamente');

// ======================
// 🖥️ UI STEPS
// ======================

Given('que el usuario busque la página de login', async () => {
  await browser.url('/');
});

When('introduce el nombre de usuario {string} y la contraseña {string}', async (username, password) => {
  await $('#user-name').setValue(username);
  await $('#password').setValue(password);
});

When('clicka en el botón de login', async () => {
  await $('#login-button').click();
});

Then('debería ser redirigido hacia el inventario', async () => {
  await browser.pause(2000);
  const currentUrl = await browser.getUrl();
  console.log(`🔍 URL actual: ${currentUrl}`);
  assert.ok(currentUrl.includes('/inventory'), `La URL actual no contiene '/inventory': ${currentUrl}`);
});

Then('debería ver los siguientes productos:', async (table) => {
  const expected = table.hashes();
  const items = await $$('.inventory_item');

  if (items.length < expected.length) {
    throw new Error('⚠️ Menos productos en UI que en la tabla esperada.');
  }

  for (let i = 0; i < expected.length; i++) {
    const name = await items[i].$('.inventory_item_name').getText();
    const price = await items[i].$('.inventory_item_price').getText();

    assert.strictEqual(name, expected[i].Nombre, `❌ Nombre esperado: ${expected[i].Nombre} | Actual: ${name}`);
    assert.strictEqual(price, expected[i].Precio, `❌ Precio esperado: ${expected[i].Precio} | Actual: ${price}`);
  }
});

Then('deberían mostrarse {int} productos en total', async (total) => {
  const items = await $$('.inventory_item');
  console.log(`📦 Total productos UI: ${items.length}`);
  assert.strictEqual(items.length, total);
});

Then('cada producto debería tener un precio mayor a 0', async () => {
  const prices = await $$('.inventory_item_price');
  for (const el of prices) {
    const value = parseFloat((await el.getText()).replace('$', ''));
    assert.ok(value > 0, `❌ Precio no válido: ${value}`);
  }
});

Then('cada producto debería tener un botón para añadir al carrito', async () => {
  const buttons = await $$('.btn_inventory');
  for (const btn of buttons) {
    const visible = await btn.isDisplayed();
    assert.ok(visible, '❌ Botón no visible');
  }
});

// ======================
// 🔌 API STEPS
// ======================

When('hago una petición GET a {string}', async function(endpoint) {
  try {
    const res = await axios.get(`http://localhost:4000${endpoint}`);
    global.apiResponse = res;
    console.log(`✅ GET ${endpoint} => Status ${res.status}`);
  } catch (error) {
    throw new Error(`❌ Error en API: ${error.message}`);
  }
});

Then('la respuesta debería contener los siguientes productos:', function (table) {
  const expected = table.hashes();
  const actual = global.apiResponse?.data || [];

  expected.forEach((item, index) => {
    const producto = actual[index];
    if (!producto) {
      throw new Error(`⚠️ Producto ${index} no encontrado en la respuesta`);
    }

    assert.strictEqual(producto.name, item.nombre, `❌ Nombre esperado: ${item.nombre} | Actual: ${producto.name}`);
    assert.strictEqual(Number(producto.price), Number(item.precio), `❌ Precio esperado: ${item.precio} | Actual: ${producto.price}`);
  });
});

Then('la respuesta HTTP debería tener el status {int}', function (statusCode) {
  const actual = global.apiResponse?.status;
  console.log(`📡 Status recibido: ${actual}`);
  assert.strictEqual(actual, statusCode, `❌ Status esperado: ${statusCode}, recibido: ${actual}`);
});

Then('la respuesta debería contener {int} productos', function (cantidad) {
  const data = global.apiResponse?.data || [];
  console.log(`📊 Total productos API: ${data.length}`);
  assert.strictEqual(data.length, cantidad);
});

Then('cada producto en la respuesta debería tener {string}, {string} y {string}', function (campo1, campo2, campo3) {
  const data = global.apiResponse?.data || [];

  data.forEach((product, i) => {
    [campo1, campo2, campo3].forEach(campo => {
      assert.ok(product.hasOwnProperty(campo), `❌ Producto ${i} no tiene campo: ${campo}`);
    });
  });
});

Then('todos los precios en la respuesta deberían ser mayores a {int}', function (valor) {
  const data = global.apiResponse?.data || [];
  data.forEach((product, i) => {
    const precio = Number(product.price);
    assert.ok(precio > valor, `❌ Producto ${i} tiene precio no válido: ${precio}`);
  });
});

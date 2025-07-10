const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');

Given('que el usuario navega a la página de login', async () => {
  await browser.url('/');
});

When('ingresa el nombre de usuario {string} y la contraseña {string}',
  async (username, password) => {
    const userInput = await $('#user-name');
    const passwordInput = await $('#password');

    await userInput.setValue(username);
    await passwordInput.setValue(password);
  }
);

When('hace clic en el botón de login', async () => {
  const loginButton = await $('#login-button');
  await loginButton.click();
});

Then('debería ser redirigido al inventario', async () => {
  await browser.waitUntil(async () => (await browser.getUrl()).includes('/inventory'), {
    timeout: 5000,
    timeoutMsg: 'No se redirigió al inventario'
  });

  const inventoryTitle = await $('.title');
  const text = await inventoryTitle.getText();
  assert.strictEqual(text, 'Products');
});

Then('debería ver un mensaje de error de credenciales incorrectas', async () => {
  const errorMsg = await $('.error-message-container.error');
  const isDisplayed = await errorMsg.isDisplayed();
  assert.strictEqual(isDisplayed, true);
  const errorText = await errorMsg.getText();
  assert.strictEqual(errorText, "Epic sadface: Username and password do not match any user in this service");
})

Then('debería ver un mensaje de error indicando que la password es necesaria', async () => {
  const errorMsg = await $('.error-message-container');
  const errorText = await errorMsg.getText();
  assert.strictEqual(errorText, "Epic sadface: Password is required");
})

Then('debería ver un mensaje de error indicando que el username es necesario', async () => {
  const errorMsg = await $('.error-message-container');
  const errorText = await errorMsg.getText();
  assert.strictEqual(errorText, "Epic sadface: Username is required");
})

Then('debería ver un mensaje de error indicando que el usuario está bloqueado',
  async () => {
    const errorMsg = await $('.error-message-container.error');
    const text = await errorMsg.getText();

    assert.ok(
      text.includes('Sorry, this user has been locked out.'),
      `Mensaje inesperado: ${text}`
    );
  }
);



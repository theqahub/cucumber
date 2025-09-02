import { BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep } from '@wdio/cucumber-framework';

console.log('[hooks] archivo cargado'); // 👈 log de control, debe salir al inicio

// GLOBAL HOOKS
BeforeAll(async () => {
  console.log('>> BeforeAll: inicia suite');
});

AfterAll(async () => {
  console.log('>> AfterAll: termina suite');
});

// CONDITIONAL HOOKS
Before({ tags: '@smoke' }, async () => console.log('>> Before @smoke'));
After({ tags: '@smoke' }, async () => console.log('>> After @smoke'));

Before({ tags: '@cart' }, async () => console.log('>> Before @cart: pre-cart'));
After({ tags: '@cart' }, async () => console.log('>> After @cart: post-cart'));

Before({ tags: '@ignore or @manual' }, async function () {
  console.log('>> Marcado como @ignore/@manual (excluir por tagExpression)');
});

// STEP HOOKS
BeforeStep(async ({ step }) => {
  console.log(`>> BeforeStep`);
});

// 🔑 Aquí integramos la lógica del screenshot en caso de fallo
AfterStep(async function ({ result }) {
  const status = result?.status || 'UNKNOWN';
  console.log(`>> AfterStep`);

  if (result?.status === 'FAILED') {
    const screenshotPath = `./errorShots/${Date.now()}.png`;
    await browser.saveScreenshot(screenshotPath);
    console.log(`>> Screenshot guardado en: ${screenshotPath}`);
  }
});

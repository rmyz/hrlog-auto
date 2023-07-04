const { chromium } = require('playwright');

(async () => {
  const [email, password, showWindow] = process.argv.slice(2)
  // Setup
  const browser = await chromium.launch(showWindow ? {headless: false} : {headless: true});
  const context = await browser.newContext({permissions:  ['geolocation']});
  const page = await context.newPage();

  // The actual interesting bit
  await page.goto('https://app.hrlog.es/admin/login');
  
  await page.getByPlaceholder('Introduce tu email o DNI/NIE').click();
  await page.getByPlaceholder('Introduce tu email o DNI/NIE').fill(email);
  await page.getByPlaceholder('Introduce tu email o DNI/NIE').press('Tab');
  await page.getByPlaceholder('Introduce tu contraseña').click();
  await page.getByPlaceholder('Introduce tu contraseña').fill(password);
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  await page.waitForTimeout(2000);
  
  await page.locator('#div-fichaje-action').click();
  await page.waitForTimeout(3500);

  // Teardown
  await context.close();
  await browser.close();
})()
console.log(process.argv.slice(2))
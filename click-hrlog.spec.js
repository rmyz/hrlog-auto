import { test } from '@playwright/test';
import credentials from './credentials.json'

test('click on hrlog', async ({ page, browser }) => {
  await page.goto('https://app.hrlog.es/admin/login');
  await page.getByPlaceholder('Introduce tu email o DNI/NIE').click();
  await page.getByPlaceholder('Introduce tu email o DNI/NIE').fill(credentials.username);
  await page.getByPlaceholder('Introduce tu email o DNI/NIE').press('Tab');
  await page.getByPlaceholder('Introduce tu contraseña').click();
  await page.getByPlaceholder('Introduce tu contraseña').fill(credentials.password);
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  await page.waitForTimeout(2000);

  await page.locator('#div-fichaje-action').click();
});
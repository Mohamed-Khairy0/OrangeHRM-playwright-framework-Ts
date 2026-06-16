import { test, expect } from '@playwright/test';



test('verify correct base url is loaded', async ({ page }) => {
  const response = await page.goto('/');
  console.log('Current URL:', page.url());
  console.log('Status Code:', response?.status());
});
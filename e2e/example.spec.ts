import { test } from "@playwright/test";
test("test", async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");
  // Go to http://localhost:3000/app/dashboard
  await page.goto("http://localhost:3000/app/dashboard");
  // Go to http://localhost:3000/auth/login
  await page.goto("http://localhost:3000/auth/login");
  // Click input[name="email"]
  await page.click('input[name="email"]');
  // Fill input[name="email"]
  await page.fill('input[name="email"]', "test@example.com");
  // Press Tab
  await page.press('input[name="email"]', "Tab");
  // Fill input[name="password"]
  await page.fill('input[name="password"]', "123123123");
  // Check input[type="checkbox"]
  await page.check('input[type="checkbox"]');
  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/app/dashboard' }*/),
    page.click('button:has-text("Login")'),
  ]);
});

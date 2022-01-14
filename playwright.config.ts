import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "e2e",
  use: {
    baseURL: "http://localhost:3000",
    browserName: "chromium",
    headless: true,

    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
};
export default config;

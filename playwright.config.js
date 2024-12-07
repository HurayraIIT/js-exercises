// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 0,
  workers: 6,
  reporter: "html",
  timeout: 10_000,
  use: {
    trace: "off",
    video: "off",
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});


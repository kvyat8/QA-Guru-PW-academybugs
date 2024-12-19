import { test as base } from "@playwright/test";
import { PageManager } from "../pageObject/page.manager";

const baseUrl = "https://academybugs.com/find-bugs/";

export const test = base.extend({
  pm: async ({ page }, use) => {
    const pm = new PageManager(page);
    await page.setViewportSize({ width: 1800, height: 800 });
    await pm.basePage.open(baseUrl);
    await use(pm);
  },
});
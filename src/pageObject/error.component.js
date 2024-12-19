import { step } from "allure-js-commons"
import { BasePage } from "./base.page"

export class ErrorComponent extends BasePage {
    constructor (page) {
        super (page);
        this.crushBugMessage = this.page.locator('.academy-bug-overlay'),
        this.bugInfoOverlay = this.page.locator('.academy-bug-info-overlay'),
        this.bugMessage = this.page.locator('.academy-popup-bug-title'),
        this.bugMessageProductPage = this.page.locator('#sq-page'),
        this.surveyBugPopup = this.page.locator('#bug-popup')
    }
        
}
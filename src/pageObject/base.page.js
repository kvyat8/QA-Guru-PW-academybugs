import * as allure from "allure-js-commons";

export class BasePage {
    constructor (page){
        this.page = page;
    }
    async open (url){
        await allure.step (`Go to page ${url}`, async () => {
        await this.page.goto(url);
    });
    }
}
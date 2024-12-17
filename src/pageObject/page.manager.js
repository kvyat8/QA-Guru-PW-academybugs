import { MainPage } from "./main.page";
import { BasePage } from "./base.page";
import { ErrorComponent } from "./error.component";
import { ProductPage } from "./product.page";


export class PageManager {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage (page),
        this.errorComponent = new ErrorComponent (page),
        this.productPage = new ProductPage (page),
        this.basePage = new BasePage (page)
}
};
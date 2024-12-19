import { step } from "allure-js-commons"
import { BasePage } from "./base.page"

export class MainPage extends BasePage {
    constructor (page) {
        super (page);
        this.paginationButton = this.page.getByRole('link', { name: '50' }),
        this.bugProductCard = this.page.locator('#ec_product_image_effect_4281370'),
        this.correctProductCard = this.page.locator('#ec_product_image_effect_4481370')
    }
    
    async changePagination () {
        await step(`Изменение пагинации на главной`, async () => {
        await this.paginationButton.click();
        })
    }

    async bugProductCardClick () {
        await step(`Переход по карточке с битым изображением`, async () => {
            await this.bugProductCard.click();
        })
    }

    async openProductPage () {
        await step(`Переход на страницу продукта`, async () => {
            await this.correctProductCard.click();
            await this.page.waitForLoadState('networkidle');
        })
    }
        
}
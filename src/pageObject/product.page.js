import { step } from "allure-js-commons"
import { BasePage } from "./base.page"

export class ProductPage extends BasePage {
    constructor (page) {
        super (page);
        this.changeCurrencyButton = this.page.locator('#ec_currency_conversion'),
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' }),
        this.itemDescription = page.locator('.ec_details_description_content'),
        this.priceFilterFirst = page.getByRole('link', { name: '$15.00 - $19.99 (1)' })        
    }
    
    async changeCurrency () {
        await step(`Изменение валюты товара`, async () => {           
            await this.changeCurrencyButton.selectOption('EUR')
        })
    }

    async postEmptyComment () {
        await step(`Отправка пустого коммента`, async () => {           
            await this.postCommentButton.click()
        })
    }

    async expandDescription () {
        await step(`Раскрытие описания`, async () => {           
            await this.itemDescription.click()
        })
    }

    async enablePriceFilter () {
        await step(`Фильтрация по цене`, async () => {           
            await this.priceFilterFirst.click()
        })
    }
    
        
}
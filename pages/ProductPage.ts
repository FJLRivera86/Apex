import { expect, Locator, Page } from "@playwright/test";

export class ProductPage{
    //Define selectors
    readonly page: Page
    readonly productDescription: Locator
    readonly buyButton: Locator

    //Init selectors using constructor
    constructor(page:Page){
        this.page = page
        this.productDescription = page.locator('.o-product__description')
        this.buyButton = page.locator('#opc_pdp_buyNowButton')
    }
    //Define page methods
    async foundProduct(){
        await this.productDescription.isVisible()
    }

    async clickBuy(){
        await this.buyButton.click()
    }
}
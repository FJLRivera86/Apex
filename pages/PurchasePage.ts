import { expect, Locator, Page } from "@playwright/test";

export class PurchasePage{
    //Define selectors
    readonly page: Page
    readonly confirmPurchase: Locator
    readonly finalizePurchase: Locator

    //Init selectors using constructor
    constructor(page:Page){
        this.page = page
        this.confirmPurchase = page.locator('#opc_container')
        this.finalizePurchase = page.locator('#submitForOther')
    }

    //Define page methods
    async confirmSelectedProduct(){
        await this.confirmPurchase.isVisible()
        await this.finalizePurchase.isVisible()
    }

}
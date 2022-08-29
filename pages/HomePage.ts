import { expect, Locator, Page } from "@playwright/test"

export class HomePage{
    //Define selectors
    readonly page: Page
    readonly loginButton: Locator
    readonly searchInput: Locator
    readonly searchButton: Locator
    readonly suggestedProduct: Locator
    readonly loggedIn: Locator

    //Init selectors using constructor
    constructor(page:Page){
        this.page = page
        this.loginButton = page.locator('.sessionMinWidth')
        this.searchInput = page.locator('#mainSearchbar')
        this.searchButton = page.locator('.icon-zoom')
        this.suggestedProduct = page.locator('.a-search-suggestion-title')
        this.loggedIn = page.locator('.popover-session')
    }

    //Define page methods
    async clickLogin(){
        await this.loginButton.click()
    }

    async search(product: string){
        await this.searchInput.type(product)
        await this.suggestedProduct.click()
    }

    async sessionStarted(){
        await this.loggedIn.isVisible()
    }
}
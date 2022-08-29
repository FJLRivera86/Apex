import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    //Define selectors
    readonly page: Page
    readonly loginScreen: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    //Init selectors using constructor
    constructor(page:Page){
        this.page = page
        this.loginScreen = page.locator('._widget login')
        this.emailInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('[name=action]')
        this.errorMessage = page.locator('#error-element-password')
    }

    //Define page methods 
    async loginDisplayed(){
        await this.loginScreen.isVisible()
    }

    async login(email:string, password:string){
        await this.emailInput.type(email)
        await this.passwordInput.type(password)
        await this.loginButton.click()
    }

    async errorLoginMessage(message:string){
        await expect(this.errorMessage).toHaveText(message)
    }
}
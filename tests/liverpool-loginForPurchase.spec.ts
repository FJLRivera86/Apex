import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { PurchasePage } from '../pages/PurchasePage'
import { navigate } from '../models/Base'

test.describe("Login Flow", () => {
    let homePage: HomePage
    let productPage: ProductPage
    let loginPage: LoginPage
    let purchasePage: PurchasePage

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page)
        productPage = new ProductPage(page)
        loginPage = new LoginPage(page)
        purchasePage = new PurchasePage(page)

        await navigate(page, 'home')
    })

    test('Login After Select Product',async ({page}) => {
        await homePage.search('Lavabolsa Filtro para Café')
        await productPage.foundProduct()
        await productPage.clickBuy()
        await loginPage.loginDisplayed()
        await loginPage.login('test.automation1986@gmail.com','Automation86')
        await purchasePage.confirmSelectedProduct()
    })

/* For this test, an incorrect password is inserted as an example of an error detected. */
    test('Select Product After Login',async ({page}) => {
        await homePage.clickLogin()
        await loginPage.loginDisplayed()
        await loginPage.login('test.automation1986@gmail.com','wrongPass')
        await homePage.sessionStarted()
        await homePage.search('Lavabolsa Filtro para Café')
        await productPage.clickBuy()
        await purchasePage.confirmSelectedProduct()
    })

    test('Login with Wrong Password', async ({page}) => {
        await homePage.search('Lavabolsa Filtro para Café')
        await productPage.foundProduct()
        await productPage.clickBuy()
        await loginPage.loginDisplayed()
        await loginPage.login('test.automation1986@gmail.com','wrongPass')
        await loginPage.errorLoginMessage('Correo electrónico o contraseña incorrecta')
    })
})
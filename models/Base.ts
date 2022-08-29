export async function navigate(page, path) {
    await page.goto('https://www.liverpool.com.mx/tienda/' + path)
}
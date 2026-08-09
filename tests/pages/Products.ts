import { type Page } from '@playwright/test'

export async function addProductsToCart(page:Page, index:number) {

    const ProductWrapper = page.locator(`.p-6`).nth(index)
    const ProductName = await ProductWrapper.getByRole(`heading`).textContent()
    const ProductPrice = await ProductWrapper.locator(`.font-bold`).textContent()
    const firstButton = ProductWrapper.getByRole(`button`,{
        name: 'Add to cart'
    })

    await firstButton.click()

    return{
        name: ProductName,
        price: Number(ProductPrice?.substring(1))
    }
    
}
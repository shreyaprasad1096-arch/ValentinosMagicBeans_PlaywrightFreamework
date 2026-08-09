import {test, expect} from '@playwright/test'

test('print api calls to products', async ({page})=>{
    //print requests:
    page.on('request',request => console.log(request.method(),request.url()));

    await page.goto('/products');
})

test('print api calls to products - complete', async ({page})=>{
    //print requests:
    page.on('request',request => console.log(request.method(),request.url()));

    await page.goto('/products');
    await page.waitForLoadState('networkidle');
})

test('intercept api call to products', async ({page})=>{
    const someProducts = {
        success: true,
        source: "dynamodb",
        data: [
            {
            name: 'Mocha coffee',
            price: 10.00,
            id: '0'
            },
            {
            name: 'Java cool',
            price: 8.99,
            id: '1'
        }
    ]
    }
    await page.route('https://api.valentinos-magic-beans.click/products',(route)=>{
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(someProducts)
        })
    })

    await page.goto('/products');
    await page.waitForLoadState('networkidle');

    await page.locator('[data-test-id="product-card-add-to-cart-button-0"]').click();
    await page.locator('[data-test-id="header-cart-button"]').getByRole('button').click();
    //assert product name
    const firstProduct = someProducts.data[0]
    if (!firstProduct) throw new Error('Expected at least one product')
    const firstProductHeading = page.getByRole('heading',{
        name: firstProduct.name
    })
    await expect(firstProductHeading).toBeVisible()

})
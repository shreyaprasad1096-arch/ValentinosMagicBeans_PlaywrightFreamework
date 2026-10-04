import { type Page } from '@playwright/test'

//This is object literal - 
//a comma-separated list of key-value pairs enclosed in curly braces {}.
// it is the simplest and most common way to create and initialize a plain JavaScript object directly in your code.
export const testValues = {
    firstName: 'Shreya',
    lastName: '.',
    email: 'dummy@gmail.com',
    address: 'example address',
    city: 'Bangalore',
    zipcode: '560043',
    country: 'India',
    payment: {
        nameOnCard: 'Shreya',
        cardNumber: '1234 5622 7766 9900',
        expiry: '01/31',
        cvc: '565'
    }
}

export async function addContactInfo(page:Page){
    await page.locator('[id= "firstName"]').fill(testValues.firstName);
    //locator('[data-test-id="checkout-firstname-input"]').fill(testValues.firstName);
    await page.locator('[id= "lastName"]').fill(testValues.lastName);
        //[data-test-id="checkout-lastname-input"]').fill(testValues.lastName);
    await page.locator('[id= "email"]').fill(testValues.email);
        //[data-test-id="checkout-email-input"]').fill(testValues.email);
}

export async function addShippingAddressInfo(page:Page){
    await page.locator('[id= "address"]').fill(testValues.address);
    await page.locator('[id= "city"]').fill(testValues.city);
    await page.locator('[id= "zipCode"]').fill(testValues.zipcode);
    await page.locator('[id= "country"]').fill(testValues.country);
}

export async function addPaymentInfo(page:Page){
    await page.locator('[id= "cardName"]').fill(testValues.payment.nameOnCard)
    await page.locator('[id= "cardNumber"]').fill(testValues.payment.cardNumber);
    await page.locator('[id= "cardExpiry"]').fill(testValues.payment.expiry);
    await page.locator('[id= "cardCvc"]').fill(testValues.payment.cvc);
}

export async function placeOrder(page: Page){
    await page.locator('[data-test-id="place-order-button"]').click()
}
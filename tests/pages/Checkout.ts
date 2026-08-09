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
    await page.locator('[data-test-id="checkout-firstname-input"]').fill(testValues.firstName);
    await page.locator('[data-test-id="checkout-lastname-input"]').fill(testValues.lastName);
    await page.locator('[data-test-id="checkout-email-input"]').fill(testValues.email);
}

export async function addShippingAddressInfo(page:Page){
    await page.locator('[data-test-id="checkout-address-input"]').fill(testValues.address);
    await page.locator('[data-test-id="checkout-city-input"]').fill(testValues.city);
    await page.locator('[data-test-id="checkout-zipcode-input"]').fill(testValues.zipcode);
    await page.locator('[data-test-id="checkout-country-input"]').fill(testValues.country);
}

export async function addPaymentInfo(page:Page){
    await page.locator('[data-test-id="checkout-cardname-input"]').fill(testValues.payment.nameOnCard)
    await page.locator('[data-test-id="checkout-cardnumber-input"]').fill(testValues.payment.cardNumber);
    await page.locator('[data-test-id="checkout-cardexpiry-input"]').fill(testValues.payment.expiry);
    await page.locator('[data-test-id="checkout-cardcvc-input"]').fill(testValues.payment.cvc);

}

export async function placeOrder(page: Page){
    await page.locator('[data-test-id="place-order-button"]').click()
}
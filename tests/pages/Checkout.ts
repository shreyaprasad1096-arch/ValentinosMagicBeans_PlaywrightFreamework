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

export async function addContactInfo(page: Page): Promise<string> {
    const firstName = page.getByRole('textbox', { name: 'First Name' })
    const lastName = page.getByRole('textbox', { name: 'Last Name' })
    const email = page.getByRole('textbox', { name: 'Email' })

    if (await firstName.isEnabled()) {
        await firstName.fill(testValues.firstName)
    }
    if (await lastName.isEnabled()) {
        await lastName.fill(testValues.lastName)
    }
    if (await email.isEnabled()) {
        await email.fill(testValues.email)
    }

    return email.inputValue()
}

export async function addShippingAddressInfo(page: Page) {
    await page.getByRole('textbox', { name: 'Address' }).fill(testValues.address)
    await page.getByRole('textbox', { name: 'City' }).fill(testValues.city)
    await page.getByRole('textbox', { name: 'ZIP Code' }).fill(testValues.zipcode)
    await page.getByRole('textbox', { name: 'Country' }).fill(testValues.country)
}

export async function addPaymentInfo(page: Page) {
    await page.getByRole('textbox', { name: 'Name on Card' }).fill(testValues.payment.nameOnCard)
    await page.getByRole('textbox', { name: 'Card Number' }).fill(testValues.payment.cardNumber)
    await page.getByRole('textbox', { name: 'Expiry (MM/YY)' }).fill(testValues.payment.expiry)
    await page.getByRole('textbox', { name: 'CVC' }).fill(testValues.payment.cvc)
}

export async function placeOrder(page: Page){
    await page.locator('[data-test-id="place-order-button"]').click()
}
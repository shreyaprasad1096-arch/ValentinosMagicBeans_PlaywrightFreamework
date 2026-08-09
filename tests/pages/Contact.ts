import { type Page } from '@playwright/test'

export async function fillOrderIDAndEmailID(page: Page, orderid: string, email:string){
    await page.locator('[data-test-id="contact-order-id-input"]').fill(orderid)
    await page.locator('[data-test-id="contact-email-input"]').fill(email)
}

export async function clickTrackOrder(page: Page){
    await page.locator('[data-test-id="contact-track-order-button"]').click()
}
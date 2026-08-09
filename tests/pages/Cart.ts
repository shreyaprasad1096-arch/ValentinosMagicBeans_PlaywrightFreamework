import { type Page , expect} from '@playwright/test'

export async function assertPoduct(page: Page, heading: string){
        //assert product name
        const firstProductHeading = page.getByRole(`heading`,{
            name: heading
        })   
        await expect(firstProductHeading).toBeVisible()
}

export async function getSubTotal(page: Page){
    //assert subtotal
    const subTotalWrapper = page.getByText(`Subtotal`).locator(`..`).locator(`.font-semibold`)
    const subtotal = await subTotalWrapper.textContent()
    return Number(subtotal?.substring(1))
}
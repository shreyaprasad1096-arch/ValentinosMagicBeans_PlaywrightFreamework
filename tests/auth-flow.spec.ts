import { test, expect } from '@playwright/test'
import {EmailUtils} from "./utils/EmailUtils"
import * as SignupPage from "./pages/signUp"
import * as loginPage from "./pages/login"
import { writeLoginData, loginDataFileExists} from './utils/AuthUtils'

test(`Sign Up`,async ({page}) => {
    test.skip(loginDataFileExists(), 'credentials present')
    const emailUtils = new EmailUtils();
    const inbox = await emailUtils.createInbox();

     await page.goto('/signup')
     await SignupPage.signUp(page,inbox.emailAddress)
    
     const email = await emailUtils.waitForLatestEmail(inbox.id)
    const code = /([0-9]{6})$/.exec(email?.body!)?.[1];
    if (!code) throw new Error('Confirmation code not found in email');
    await SignupPage.addConfirmationCode(page, code);

     await loginPage.login(page,inbox.emailAddress,SignupPage.signupDetails.password);

     await expect(page).toHaveURL('/')

     writeLoginData({
        email:inbox.emailAddress,
        password:SignupPage.signupDetails.password
     })
})
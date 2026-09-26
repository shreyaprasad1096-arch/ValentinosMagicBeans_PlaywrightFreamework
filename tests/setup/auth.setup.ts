import {expect,test} from '@playwright/test';
import * as loginPage from '../pages/login.js';
import { readloginData,getAuthSessionPath } from '../utils/AuthUtils.js';

test('authentication',async ({page}) => {
    const loginData = readloginData()

    if(loginData){
        await page.goto('/login')
        await loginPage.login(
            page,
            loginData.email,
            loginData.password
        )
        //After successful login 
        await expect(page).toHaveURL('/')

        await page.context().storageState({
            path: getAuthSessionPath()
        })
    }else{
        console.warn('No valid credentials found')
    }
})
//node js imports
import {join, resolve} from 'path'
import {writeFileSync, existsSync,mkdirSync, readFileSync} from 'fs'

type LoginData = { 
    email:string,
    password:string,
}

function getAuthDir(): string{
    return resolve(__dirname, join('..','..','playwright','.auth'));
}

function getLoginDataPath() : string{
    return join(getAuthDir(),'loginData.json');
}

export function getAuthSessionPath():string{
    return join(getAuthDir(),'user.json')
}
export function loginDataFileExists():boolean{
    return existsSync(getLoginDataPath());
}

export function writeLoginData(loginData: LoginData):void{
    const authDir = getAuthDir();
    if(!existsSync(authDir)){
        mkdirSync(authDir,{recursive: true});
    }
    writeFileSync(
        getLoginDataPath(),
        JSON.stringify(loginData,null,2)
    )
}
    export function readloginData(){
        if(loginDataFileExists()){
            return JSON.parse(readFileSync(getLoginDataPath(),'utf-8')) as LoginData;
        }
        return undefined;
    }

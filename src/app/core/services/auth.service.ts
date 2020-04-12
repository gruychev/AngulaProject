import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from 'src/app/components/shared/models/regieter.model';
import { LoginModel } from 'src/app/components/shared/models/login.model';
import { APP_KEY, APP_SECRET } from './kinvey.tokens';




const registerUrl = `https://baas.kinvey.com/user/${APP_KEY}`;
const loginUrl = `https://baas.kinvey.com/user/${APP_KEY}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${APP_KEY}/_logout`;


@Injectable()
export class AuthService {
    isAuthenticated() {
        throw new Error("Method not implemented.");
    }
    private currentAuthtoken: string;

    

    register(model: RegisterModel) {
        return this.http.post(
            registerUrl,
            JSON.stringify(model),
           );
    }

    login(model: LoginModel) {
        return this.http.post(
            loginUrl,
            JSON.stringify(model),);
    }

    logout() {
        return this.http.post(
            logoutUrl,
            {},)
           
    }


    checkIfLogged() {
       
         return  localStorage.getItem('authtoken') !==null;
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }

    constructor(private http: HttpClient) { }

    
}
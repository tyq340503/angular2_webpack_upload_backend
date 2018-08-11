import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    checkUser(model: any) {
        let url = "http://localhost:8080/user/register";
        let header = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(url, JSON.stringify(model), { headers: header });
    }

    sendToken(token: string) {
        let url = "http://localhost:8080/rest/user/users";
        let header = new Headers({ 'Authorization': 'token ' + token });

        return this.http.get(url, { headers: header });
    }

    checkLogin(){
        if(localStorage.getItem('token')!=""&&localStorage.getItem('username')!=""){
            return true;
        }else{
            return false;
        }
    }

    logout(){
        localStorage.setItem("username","");
        localStorage.setItem("token","");
        alert('logout success');
    }
}
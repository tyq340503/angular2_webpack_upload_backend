import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Photo} from '../models/photo'
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUserName(username: string) {
        let token = localStorage.getItem('token');
        let url = "http://localhost:8080/rest/user/username";
        let header = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token ' + token });

        return this.http.post(url, username, { headers: header });
    }
}
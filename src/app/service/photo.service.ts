import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Photo } from '../models/photo'
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { promise } from 'selenium-webdriver';
import { reject } from 'q';
import { resolve } from 'path';

@Injectable()
export class PhotoService {
    private fileUpload: Array<File>;

    constructor(private http: Http) {
        this.fileUpload = [];
    }

    getPhotoListByUser(user: User) {
        let token = localStorage.getItem('token');
        let url = "http://localhost:8080/rest/photo/user";
        let header = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token ' + token });

        return this.http.post(url, user, { headers: header });
    }

    sendPhoto(photo: Photo) {
        let token = localStorage.getItem('token');
        let url = "http://localhost:8080/rest/photo/user";
        let header = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token ' + token });

        return this.http.post(url, JSON.stringify(photo), { headers: header });
    }

    uploadPhoto() {
        this.fileRequest("http://localhost:8080/rest/photo/upload", [], this.fileUpload).then(
            result => {
                console.log(result);
            }, error => {
                console.log(error);
            }
        )
    }

    fileChangeEvent(fileInput: any) {
        this.fileUpload = <Array<File>>fileInput.target.files;
    }

    fileRequest(url: string, params: Array<string>, file: Array<File>) {
        return new Promise((resolve, reject) => {
            let formData = new FormData();
            let xhr = new XMLHttpRequest();
            let token = localStorage.getItem('token');
            for (let i = 0; i < file.length; i++) {
                formData.append("uploads[]", file[i], file[i].name);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log('success');
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open("POST", url, true);
            xhr.setRequestHeader('Authorization', 'token ' + token);
            xhr.send(formData);
        })
    }
}
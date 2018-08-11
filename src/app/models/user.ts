import { Photo } from './photo';

export class User {
    private userId: number;
    private email: string;
    userName: string;
    password: string;

    private created: Date;

    photoList: Photo[];

    likedPhotoList: Photo[];

    public getPhotoList(){
        return this.photoList;
    }

    public setValue(object:Object){
        this.userName = object['username'];
        this.password = object['password'];
        this.email = object['email'];
    }

}
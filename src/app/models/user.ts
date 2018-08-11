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

}
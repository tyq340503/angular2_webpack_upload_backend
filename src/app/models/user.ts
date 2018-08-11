import { Photo } from './photo';

export class User {
    private userId: number;
    private email: string;
    private userName: string;
    private password: string;

    private created: Date;

    private photoList: Photo[];

    private likedPhotoList: Photo[];

    public getPhotoList(){
        return this.photoList;
    }

}
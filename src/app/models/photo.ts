import { User } from './user';
import { Comment } from './comment';

export class Photo {
    private photoId: number;
    private photoName: string;
    private description: string;

    private created: Date;

    private user: User;

    private likes: number;
    private commentList: Comment[];

    public setUser(user: User): User {
        return this.user =user;
    }
}
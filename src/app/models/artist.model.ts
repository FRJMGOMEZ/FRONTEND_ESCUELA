import { Indexcard } from './indexcard.model';
import { User } from './user.model';
import { Track } from './track.model';
import { Payment } from './payment.model';
export class Artist {
    constructor(
        public name:string,
        public indexcard: string | Indexcard,
        public payments: string[] | Payment[],
        public tracks:string[] | Track[],
        public user: string| User,
        public _id?: string) {
    }
}



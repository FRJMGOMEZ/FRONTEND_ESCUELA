import { Payment } from './payment.model';
import { Indexcard } from './indexcard.model';
export class Artist {
    constructor(
        public indexcard: string | Indexcard,
        public payments?: Payment[],
        public _id?: string) {
    }
}


import { Track } from './track.model';
import { Payment } from './payment.model';

export class Income {
    constructor(
        public amount: number,
        public from: string,
        public track: string | Track,
        public date: Date,
        public payments: string[] | Payment[],
        public _id?: string) {
    }
}

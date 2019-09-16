import { Track } from './track.model';

export class Payment {
    constructor(
        public amount: number,
        public track: Track,
        public date: Date,
        public sent:boolean = false,
        public sentDate?:Date,
        public _id?: string) {
    }
}




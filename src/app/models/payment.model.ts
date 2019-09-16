import { Track } from './track.model';

export class Payment {
    constructor(
        public amount: number,
        public track: any,
        public date: Date,
        public sent:boolean = false,
        public sentDate?:Date,
        public artist?:any,
        public _id?: string) {
    }
}




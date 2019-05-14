import { Track } from './track.model';

export class Payment {
    constructor(
        public amount: number,
        public track: string | Track,
        public date: Date,
        public sent:boolean = false,
        public _id?: string) {
    }
}




import { Track } from './track.model';
import { Artist } from './artist.model';

export class Payment {
    constructor(
        public amount: number,
        public track: Track,
        public date: Date,
        public sent:boolean = false,
        public sentDate?:Date,
        public artist?:Artist,
        public _id?: string) {
    }
}




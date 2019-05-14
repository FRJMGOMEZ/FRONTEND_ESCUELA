import { Album } from './album.models';
import { Artist } from './artist.model';

export class Track {
    constructor(
        public title: string,
        public assignations:any[],
        public album: string | Album,
        public percent:number=100,
        public _id?: string) {
    }
}

///// Pensar sistema de asignación dinámico ////

export class Assignation {
    constructor(public artist: string | Artist,
                public percent: number,
                public _id?: string){

    }
}

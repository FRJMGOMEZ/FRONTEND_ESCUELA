import { Indexcard } from './indexcard.model';
export class Alumni {

    constructor(public indexcard: string | Indexcard,
                public subjects?: string[],
                public _id?:string) {
    }
}



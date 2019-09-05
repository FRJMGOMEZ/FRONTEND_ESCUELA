import { Indexcard } from './indexcard.model';


export class Professor{

    constructor(public indexcard:string | Indexcard,
                public subjects?:string[],
                public _id?:string){
    }
}


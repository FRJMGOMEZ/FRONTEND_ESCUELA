export class Event{
    constructor(public name:string,
                public description:string,
                public duration:number,
                public position:number,
                public repetition:boolean,
                public user: string,
                public facilitie:string,
                public professors?: string[],
                public subjects?: string[],
                public _id?:string
                ){}
}



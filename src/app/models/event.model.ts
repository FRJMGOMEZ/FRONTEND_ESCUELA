import { Facilitie } from './facilitie.model';
export class Event{
    constructor(public name:string,
                public description:string,
                public duration:number,
                public position:number,
                public user: string,
                public facilitie:Facilitie,
                public hour: number,
                public day:number,
                public permanent: boolean,
                public startDate:Date,
                public endDate:Date,
                public _id?:string
                ){}
}


export class EventOrder{
    constructor(public event:Event,
                public order:string){}
}


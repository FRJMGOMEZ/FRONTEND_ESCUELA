import { Facilitie } from './facilitie.model';
export class EventModel{
    constructor(public name:string,
                public description:string,
                public duration:number,
                public position:number,
                public user: string,
                public facilitie:string,
                public hour: number,
                public day:number,
                public permanent: boolean,
                public startDate:Date,
                public endDate:Date,
                public project?:string,
                public _id?:string
                ){}
}


export class EventOrder{
    constructor(public event:EventModel,
                public order:string){}
}


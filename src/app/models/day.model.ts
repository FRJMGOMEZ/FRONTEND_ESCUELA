import { EventModel } from './event.model';

export class Day {
         constructor(
             public hour0: EventModel[],
             public hour1: EventModel[],
             public hour2: EventModel[],
             public hour3: EventModel[],
             public hour4: EventModel[],
             public hour5: EventModel[],
             public hour6: EventModel[],
             public hour7: EventModel[],
             public hour8: EventModel[],
             public hour9: EventModel[],
             public hour10: EventModel[],
             public hour11: EventModel[],
             public date:Date,
             public _id?:string
         ) {}
       }

export class DayOrder{
    constructor(public day:Day,
               public order:string){
    }
}       


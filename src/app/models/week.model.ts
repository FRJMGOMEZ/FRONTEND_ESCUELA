import { Day } from './day.model';
export class Week {
    constructor(
        public date:Date,
        public monday:Day,
        public tuesday: Day,
        public wednesday: Day,
        public thursday: Day,
        public friday: Day,
        public saturday: Day,
        public sunday: Day,
        public _id?:string
    ){}
}
export class Calendar {

    constructor(
        public date:Date,
        public monday:string[],
        public tuesday: string[],
        public wednesday: string[],
        public thursday: string[],
        public friday: string[],
        public saturday: string[],
        public sunday: string[],
        public _id?:string
    ){}
}
export class User {
    constructor(
        public name:string,
        public email:string,
        public password?:string,
        public status?:boolean,
        public img?:string,
        public google?:boolean,
        public _id?: string,
        public projects?:any[],
        public role?: string,
    ){
    }
}
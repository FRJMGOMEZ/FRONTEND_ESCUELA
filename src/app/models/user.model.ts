export class User {
    constructor(
        public name:string,
        public email:string,
        public password?:string,
        public status?:boolean,
        public img?:string,
        public google?:boolean,
        public _id?: string,
        public projects?:string[],
        public role?: string,
        public lastCheck?:Date
    ){
    }
}


export class UserOrder{
    constructor(public user:User,
               public order:string){

    }
}
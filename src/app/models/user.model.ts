import { FileModel } from './file.model';
export class User {
    constructor(
        public name:string,
        public email:string,
        public password?:string,
        public status?:boolean,
        public img?:FileModel,
        public _id?: string,
        public projects?:any[],
        public role?: string,
        public connected?:boolean
    ){
    }
}

export class UserOrder{
    constructor(public user: User,
                public order:string,
                ){
    }
}

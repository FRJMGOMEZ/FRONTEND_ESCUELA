export class Message {
    constructor(public user: string,
        public project: string,
        public message: string,
        public img?:string,
        public file?:string,
        public title?:string,
        public date?:string,
        public _id?:string,
        )
        {}    
}
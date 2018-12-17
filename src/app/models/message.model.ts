export class Message {
    constructor(public usuario: string,
        public proyecto: string,
        public mensaje: string,
        public img?:string,
        public file?:string,
        public titulo?:string,
        public date?:string,
        public _id?:string,
        )
        {}    
}
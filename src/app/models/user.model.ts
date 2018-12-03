export class User {
    constructor(
        public nombre:string,
        public email:string,
        public password?:string,
        public estado?:boolean,
        public img?:string,
        public google?:boolean,
        public rol?:string,
        public _id?: string,
        public proyectos?:any[],
    ){
    }
}
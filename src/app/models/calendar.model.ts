export class Calendar {

    constructor(
        public fecha?:Date,
        public lunes?:string[],
        public martes?: string[],
        public miercoles?: string[],
        public jueves?: string[],
        public viernes?: string[],
        public sabado?: string[],
        public domingo?: string[],
        public _id?:string
    ){}
}
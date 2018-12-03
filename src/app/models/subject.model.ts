export class Subject {
    constructor(public nombre:string,
               public profesores?:string[],
               public alumnos?:string[],
               public _id?:string){}
}
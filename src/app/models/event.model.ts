export class Event{
    constructor(public nombre:string,
                public descripcion:string,
                public duracion:number,
                public posicion:number,
                public repeticion:boolean,
                public usuario: string,
                public instalacion:string,
                public profesores?: string[],
                public materias?: string[],
                public _id?:string
                ){}
}



export class Project{

    constructor(public nombre:string,
                public descripcion:string,
                public _id?:string,
                public participantes?:Object[],
                public administradores?:Object[],
                public img?:string,
                public mensajes?:string[],
                public archivos?:string[],
                public imagenes?:string[],
                public activo?:boolean ){

    }
}
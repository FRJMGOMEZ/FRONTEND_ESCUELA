export class Project{

    constructor(public nombre:string, public descripcion:string,
                                      public _id?:string,
                                      public participantes?:string[],
                                      public img?:string,
                                      public mensajes?:string[],
                                      public archivos?:string[],
                                      public imagenes?:string[],
                                      public finalizado?:boolean ){

    }
}
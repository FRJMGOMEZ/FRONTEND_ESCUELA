export class Project{

    constructor(public name:string,
                public participants:Object[],
                public administrators:Object[],
                public description?: string,
                public img?:string,
                public messages?:string[],
                public files?:string[],
                public images?:string[],
                public active?:boolean,
                public _id?: string, ){
    }
}
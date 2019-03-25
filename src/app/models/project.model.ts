
export class Project{

    constructor(public name:string,
                public participants?:string[],
                public administrators?:string[],
                public description?: string,
                public img?:string,
                public messages?:string[],
                public tasks?:string[],
                public status?:boolean,
                public _id?: string, ){
    }
}

export class ProjectOrder{
    constructor(public project:Project,
                public order:string){
    }
}
import { Image } from './image';
import { File } from './file';

export class Project{

    constructor(public name:string,
                public participants?:Object[],
                public administrators?:Object[],
                public description?: string,
                public img?:string,
                public messages?:string[],
                public files?:File[],
                public images?:Image[],
                public active?:boolean,
                public _id?: string, ){
    }
}

export class ProjectOrder{
    constructor(public project:Project,
                public order:string){
    }
}
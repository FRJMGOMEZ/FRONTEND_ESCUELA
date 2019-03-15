
export class FileModel{
    constructor(public name:string,
                public title:string,
                public download:boolean,
                public format:string,
                public type: string,
                public _id?:string){
    }
}

export class FileOrder{
    constructor(public file:FileModel,
                public order: string){}
}
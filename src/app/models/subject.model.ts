export class Subject {
    constructor(public name:string,
               public professors?:string[],
               public alumnis?:string[],
               public _id?:string){}
}


export class SubjectOrder{
    constructor(public subject:Subject,
                public order:string){}
}
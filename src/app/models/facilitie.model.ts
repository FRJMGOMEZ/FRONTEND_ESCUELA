
export class Facilitie {
    constructor (public name:string,
                 public days:any[],
                 public status:boolean,
                 public _id?:string
                 ) {}
}


export class FacilitieOrder{
    constructor(public facilitie:Facilitie,
                public order:string){}
}
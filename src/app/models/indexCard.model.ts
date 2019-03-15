export class Indexcard {

constructor(public role: string,
            public name:string,
            public surname?:string,
            public email?:string, 
            public mobile?:string,
            public home?:string,
            public address?:string,
            public status?:boolean,
            public _id?:string){
}

}


export class IndexcardOrder{
    constructor(public indexcard:Indexcard,
               public order:string){
    }
}
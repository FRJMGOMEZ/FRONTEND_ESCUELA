
export class Message {
    constructor(
        public user: string,
        public project: string,
        public message: string,
        public file?:string,
        public date?:string,
        public _id?:string,
        )
        {}    
}

export class MessageOrder{
    constructor(public message:Message,
                public order:string){

    }
}


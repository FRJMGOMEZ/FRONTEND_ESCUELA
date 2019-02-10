export class Alumni {

    constructor(public name: string,
                public indexcard: string,
                public img?: string,
                public subjects?: string[],
                public _id?:string) {
    }
}

export class AlumniOrder {
    constructor(
        public alumni:Alumni,
        public order:string
    ){}
}
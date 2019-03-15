export class Task{
    constructor(public description:string,
                public assignedBy:string,
                public user:string,
                public project:string,
                public date:Date,
                public dateLimit:Date,
                public ok?:boolean,
                public checked?:boolean,
                public _id?:string
                ){
    }
}

export class TaskOrder{
    constructor(public task:Task,
                public order:string){
    }
}
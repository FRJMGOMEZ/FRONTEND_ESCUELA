import { Payment } from './payment.model';
import { Debitor } from './debitor.modal';

export class Income {
    constructor(
        public notLiquidatedAmount: number,
        public debitor: Debitor,
        public date: Date,
        public liquidatedAmount?: number,
        public description?:string,
        public payments?: string[] |Payment[],
        public _id?: string) {
    }
}



import { Debitor } from './debitor.modal';
import { Payment } from './payment.model';

export class Income {
    constructor(
        public notLiquidatedAmount: number,
        public debitor: Debitor,
        public date: Date,
        public liquidatedAmount?: number,
        public description?:string,
        public payments?: Payment[],
        public _id?: string) {
    }
}



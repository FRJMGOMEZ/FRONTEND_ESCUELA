import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeConversor2'
})
export class TimeConversorPipe2 implements PipeTransform {

    transform(position: number, duration:number): any { 

    if(duration === null){
    let integer = String(position).split('.')[0];
    let decimal = String(position).split('.')[1];
        if (decimal === undefined) { return `${Number(integer) + 8}:00` }
        if(decimal === '25'){return `${Number(integer)+8}:15`}
        if (decimal === '5') { return `${Number(integer) + 8}:30`}
        if (decimal === '75') { return `${Number(integer) + 8}:45` }
    }else {
    let integer = String(position+duration).split('.')[0];
    let decimal = String(position+duration).split('.')[1];
        if (decimal === undefined) { return `${Number(integer) + 8}:00` }
        if (decimal === '25') { return `${Number(integer) + 8}:15` }
        if (decimal === '5') { return `${Number(integer) + 8}:30` }
        if (decimal === '75') { return `${Number(integer) + 8}:45` }
    }                 
}}
import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
    name: 'timeConversor1'
})
export class TimeConversor1Pipe implements PipeTransform {

    transform(backEndTime:number): any {

       let integer = String(backEndTime).split('.')[0];
       let decimal = String(backEndTime).split('.')[1];

       if(decimal === undefined){return `${integer}:00`}
        if (decimal === '25') { return `${integer}:15` }
        if (decimal === "5") {return `${integer}:30`}
        if (decimal === "75") { return `${integer}:45` }
    }

}

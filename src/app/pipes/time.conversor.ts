import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'timeConversor'
})
export class TimeConversorPipe implements PipeTransform {

    transform(position: any, time:string): any {
        
    if (position - parseInt(position) === 0) {
   
        if (time === '0') { return `${parseInt(position) + 8}:00`; }
        if (time === '25') { return `${parseInt(position) + 8}:15`; }
        if (time === "50") { return `${parseInt(position) + 8}:30` }
        if (time === "75") { return `${parseInt(position) + 8}:45` }

        
    }
        if (position - parseInt(position) === 0.25) {
            
            if (time === '0') { return `${parseInt(position) + 8}:15`;}
            if (time === '25') { return `${parseInt(position) + 8}:30`; }
            if (time === "50") {return `${parseInt(position) + 8}:45`}
            if(time === '75'){return ''}

        }

        if (position - parseInt(position) === 0.50) {
            if (time === '0') { return `${parseInt(position) + 8}:30`; }
            if (time === '25') { return `${parseInt(position) + 8}:45`; }
            
        }

        if (position - parseInt(position) === 0.75) {
            
              return `${parseInt(position) + 8}:45`;                      
        }

            if (position - parseInt(position) === 0.25) { return `${parseInt(position) + 8}:15` }
            if (position - parseInt(position) === 0.50) { return `${parseInt(position) + 8}:30` }
            if (position - parseInt(position) === 0.75) { return `${parseInt(position) + 8}:45` }
        

        if(time === '25'){
            if (position - parseInt(position)=== 0)     {return ''}
            if (position - parseInt(position) === 0.25) { return `${parseInt(position) + 8}:15` }
            if (position - parseInt(position) === 0.50) { return `${parseInt(position) + 8}:30` }
            if (position - parseInt(position) === 0.75) { return `${parseInt(position) + 8}:45` }   
        }
        if (time === '30') {
            if (position - parseInt(position) === 0.50) { return `${parseInt(position) + 8}:30` }
            if (position - parseInt(position) === 0.75) { return `${parseInt(position) + 8}:45` } 
        }

        if (time === "45") {
            if (position - parseInt(position) === 0.75) { return `${parseInt(position) + 8}:45` } 
        }



            

    }

}



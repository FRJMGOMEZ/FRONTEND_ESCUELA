import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysOfWeek',
  pure:true
})
export class DaysOfWeekPipe implements PipeTransform {

   transform(date: Date): any {

    let dateToReturn;

    switch (date.getDay()) {
      case 1:
          dateToReturn=date;
        break;
      case 2:
          dateToReturn = new Date(date.getTime() - 86400000)
        break;
      case 3:
          dateToReturn = new Date(date.getTime() - (86400000*2))
        break;
      case 4:
          dateToReturn = new Date(date.getTime() - (86400000*3))
        break;
      case 5:
          dateToReturn = new Date(date.getTime() - (86400000*4))
        
        break;
      case 6:
          dateToReturn = new Date(date.getTime() - (86400000*5))
        break;
      case 0:
          dateToReturn = new Date(date.getTime() - 86400000*6)
        break;  
    }
    return dateToReturn;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pdf'
})
export class PdfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

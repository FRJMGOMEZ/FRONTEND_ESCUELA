import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'filesPipe'
})
export class FilesPipe implements PipeTransform {
  transform(file: any,type:string): any {
    let url = `${URL_SERVICES}/files/${type}/${file}`;
    return url
  }

}

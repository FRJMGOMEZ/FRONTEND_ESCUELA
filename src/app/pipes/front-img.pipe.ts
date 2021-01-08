import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'frontImg'
})
export class FrontImgPipe implements PipeTransform {
  transform(img:string): any {
    let url;
    url = `${URL_SERVICES}/files/front/${img}`;
    return url
  }
}

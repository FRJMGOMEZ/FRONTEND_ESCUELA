import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'frontImg'
})
export class FrontImgPipe implements PipeTransform {
  transform(img:string): any {
    let url;
    url = `https://cargomusicadm.herokuapp.com/api/files/front/${img}`;
    return url
  }
}

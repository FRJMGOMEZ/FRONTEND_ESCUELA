import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';


@Pipe({
  name: 'frontImg'
})
export class FrontImgPipe implements PipeTransform {

  transform(img:string): any {
    let url = `${URL_SERVICES}assets/${img}`;
    return url
  }

}

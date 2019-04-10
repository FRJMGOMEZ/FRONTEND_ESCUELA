import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';


@Pipe({
  name: 'frontImg'
})
export class FrontImgPipe implements PipeTransform {
  transform(img:string): any {
    let url;
   if(URL_SERVICES.indexOf('localhost')>=0){
     url = `${URL_SERVICES}files/front/${img}`;
     return url
   }else{
     url=`https://cargomusicfilesstorage.s3.amazonaws.com/${img}`
     return url
   }
  }
}

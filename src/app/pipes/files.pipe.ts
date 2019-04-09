import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { FileModel } from '../models/file.model';

@Pipe({
  name: 'filesPipe',
  pure:true
})
export class FilesPipe implements PipeTransform {
  transform(file:FileModel) {
    if(file.location){
      return file.location
    }else{
      let url = `${URL_SERVICES}/files/${file.type}/${file.name}`;
      return url
    }
  }
}

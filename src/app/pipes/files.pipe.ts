import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { FileModel } from '../models/file.model';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'filesPipe',
  pure:true
})
export class FilesPipe implements PipeTransform {
  transform(file:FileModel) {
    if(environment.production){
      return file.location
    }else{
      let url = `${URL_SERVICES}files/${file.type}/${file.name}`;
      return url
    }
  }
}

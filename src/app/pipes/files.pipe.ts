import { Pipe, PipeTransform } from '@angular/core';
import { FileModel } from '../models/file.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'filesPipe',
  pure:true
})
export class FilesPipe implements PipeTransform {
  constructor(public http:HttpClient){}
  transform(file:FileModel) {
      return `${URL_SERVICES}getAwsFileBuffer/${file.name}`
  }
}

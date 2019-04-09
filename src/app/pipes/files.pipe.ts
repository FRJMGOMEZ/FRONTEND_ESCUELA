import { Pipe, PipeTransform } from '@angular/core';
import { FileModel } from '../models/file.model';

@Pipe({
  name: 'filesPipe',
  pure:true
})
export class FilesPipe implements PipeTransform {
async  transform(file:FileModel) {
    let buff = await new Buffer(file['file'].data)
    let base64data = await buff.toString('base64');
    return base64data
  }
}

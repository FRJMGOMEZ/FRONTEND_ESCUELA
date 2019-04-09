import { Pipe, PipeTransform } from '@angular/core';
import { FileModel } from '../models/file.model';
import * as fs from "fs";

@Pipe({
  name: 'filesPipe',
  pure:true
})
export class FilesPipe implements PipeTransform {
async  transform(file:FileModel) {
    let buff = await new Buffer(file['file'].data)
    let base64data = await buff.toString('base64')
    base64data = base64data.split(';base64,').pop();
    let pdf = await fs.writeFile('image.png', base64data, { encoding: 'base64' }, function (err) {
    if(err){console.log(err)}
  });
  console.log(pdf)
    return pdf
  }
}

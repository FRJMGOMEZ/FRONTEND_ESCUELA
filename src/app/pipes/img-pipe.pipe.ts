import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';


@Pipe({
  name: 'imgPipe',
  pure:true
})
export class ImgPipe implements PipeTransform {

  transform(file:any) {
    let url;
    if (!file) {
      return url = `${URL_SERVICES}files/x/x `
    }

    if(!file.format){
      if (file.name) {
        let ext = file.name.split('.');
        ext = ext[ext.length-1];
        url = `${URL_SERVICES}files/`
        switch(ext){
         case 'pdf' : url += 'icons/pdf.png';
         break;
        }
      return url 

      }else{
        if (file.indexOf("https") >= 0) {
          return file;
        }
        if (file.indexOf('base64') >= 0) {
          return file
        }
      }
    }else{
      if (file.location) {
        return file.location
      }else{
        let textFormats = ['pdf'];
        let imgFormats = ['png', 'jpg', 'gif', 'jpeg'];
        if (imgFormats.indexOf(file.format) >= 0) {
          url = `${URL_SERVICES}files/`
          switch (file.type) {
            case "alumnis":
              url += `alumnis/${file.name}`;
              break;
            case "professors":
              url += `professors/${file.name}`;
              break;
            case "users":
              url += `users/${file.name}`;
              break;
            case "projects":
              url += `projects/${file.name}`;
              break;
            case "projectFiles":
              url += `projectFiles/${file.name}`;
              break;
            case 'icons':
              url += `icons/${file.name}`;
              break;
            default:
              url += `x/x`;
          }
          return url;
        } else if (textFormats.indexOf(file.format) >= 0) {
          url = `${URL_SERVICES}files/icons`
          switch (file.format) {
            case 'pdf': url += '/pdf.png';
              break;
          }
          return url
        }
      }
    } 
      }
  }


import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';


@Pipe({
  name: 'imgPipe'
})
export class ImgPipe implements PipeTransform {

  transform(img: any, type: any): any {

    let url = `${URL_SERVICES}/images/`;

    if (!img) {
      /// Redirection to no image path
      return url += `x/x`;
    }

    if (img.indexOf("https") >= 0) {
      return img;
    }

    if (img.indexOf('base64') >= 0) {
      return img
    }

    switch (type) {
      case "alumnis":
        url += `alumnis/${img}`;
        break;
      case "professors":
        url += `professors/${img}`;
        break;
      case "users":
        url += `users/${img}`;
        break;
      case "projects":
        url += `projects/${img}`;
        break;
      case "imagesProject":
        url += `imagesProject/${img}`;
        break;
      case "filesProject":
        url += `filesProject/${img}`;
        break;
      case "files":
        url += `files/${img}`;
        break;
      case 'icons':
       url +=  `icons/${img}`;
        break;
      default:
        url += `x/x`;
    }

    return url;
  }
}

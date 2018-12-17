import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';


@Pipe({
  name: 'imgPipe'
})
export class ImgPipe implements PipeTransform {

  transform(img: any, type: any): any {

    let url = `${URL_SERVICES}/imagenes/`;

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
      case "alumnos":
        url += `alumnos/${img}`;
        break;
      case "profesores":
        url += `profesores/${img}`;
        break;
      case "usuarios":
        url += `usuarios/${img}`;
        break;
      case "proyectos":
        url += `proyectos/${img}`;
        break;
      case "imgProyectos":
        url += `imgProyectos/${img}`;
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

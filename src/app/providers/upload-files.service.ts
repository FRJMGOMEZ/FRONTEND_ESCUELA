import { Injectable, NgZone } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesServices {

  constructor(private zone:NgZone) { }

  updateFile(file: File, type: string, id: string) {

    return new Promise((resolve, reject) => {

     this.zone.run( ()=>{

       let formData = new FormData();

       let xhr = new XMLHttpRequest();

       let url;

       

       if(file.type.indexOf('image')>= 0){
         formData.append("img", file, file.name);
         url = `${URL_SERVICES}/uploadImg/${type}/${id}`
       }
       if(file.type.indexOf('pdf')>=0){

         console.log(file.type)
         
         formData.append('files', file, file.name)
         url = `${URL_SERVICES}/uploadFile/${type}/${id}`
       }

       xhr.onreadystatechange = () => {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
             console.log("IMG UPDATED");
             resolve(JSON.parse(xhr.response))
           }
           else {
             console.log('UPDATING PROCCESS HAS FAILED');
             console.log(xhr.responseText)
           }
         }
       };

       xhr.open('PUT', url, true);

       xhr.send(formData)
     })
    })
  }
}

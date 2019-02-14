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

         formData.append('file',file,file.name);
         url = `${URL_SERVICES}/upload/${type}/${id}`
       
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

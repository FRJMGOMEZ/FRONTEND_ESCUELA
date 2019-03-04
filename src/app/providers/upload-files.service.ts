import { Injectable, NgZone } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesServices {

  public fileSource = new Subject<any>();
  public files$ = this.fileSource.asObservable();

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
             let fileUploaded = xhr.response.split(":")[2];
             fileUploaded = fileUploaded.slice(0,fileUploaded.length - 2);
             fileUploaded = fileUploaded.substr(1,fileUploaded.length)
             this.fileSource.next({file:fileUploaded,type})
             resolve(xhr.response)
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

import { Injectable, NgZone } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FileOrder , FileModel } from '../models/file.model';
import { UserServices } from './user.service';
import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesServices {

  public fileSource = new Subject<FileOrder>();
  public files$ = this.fileSource.asObservable();

  constructor(private zone:NgZone,
              private http:HttpClient,
              private _userServices:UserServices) { }

  putFile(file: File, type: string, id: string, download:boolean=false) {
    return new Promise((resolve, reject) => {
     this.zone.run( ()=>{
       let formData = new FormData();
       let xhr = new XMLHttpRequest();
       let url;     
         formData.append('file',file,file.name);
         url = `${URL_SERVICES}/upload/${type}/${id}/${download}`
       xhr.onreadystatechange = () => {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
            let fileOrder = new FileOrder(JSON.parse(xhr.response).file,'push')
            this.fileSource.next(fileOrder)
           }
           else {
             console.log('UPDATING PROCCESS HAS FAILED');
             console.log(xhr.responseText)
           }
          };
         }
       xhr.open('PUT', url, true);
       xhr.send(formData)
     })
    })
  }

  deleteFile(fileId:string,type:string){
    let url = `${URL_SERVICES}/deleteFile/${fileId}/${type}`;
    return this.http.delete(url).pipe(map((res:any)=>{
      let fileOrder = new FileOrder(res.file,'delete')
      this.fileSource.next(fileOrder)
    }))
  }

  getFileById(id:string){
    let url = `${URL_SERVICES}/searchById/file/${id}`
    let headers = new HttpHeaders().set('token',this._userServices.token)
    return this.http.get(url, {headers}).pipe(map((res:any)=>{
      let fileOrder = new FileOrder(res.file,'getById');
      this.fileSource.next(fileOrder)
    }))
  }
}

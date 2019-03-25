import { Injectable, NgZone } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FileOrder} from '../models/file.model';


@Injectable({
  providedIn: 'root'
})
export class UploadFilesServices {

  headers: HttpHeaders

  public fileSource = new Subject<FileOrder>();
  public files$ = this.fileSource.asObservable();

  textFormats: string[] = ['pdf'];
  imgFormats: string[] = ['png', 'jpg', 'gif', 'jpeg'];

  constructor(private zone:NgZone,
              private http:HttpClient) {

                this.headers = new HttpHeaders().set('token',localStorage.getItem('token'))
               }

  uploadFile(file: File, type: string, id: string, download:boolean=false) {
     this.zone.run( ()=>{
       let formData = new FormData();
       let xhr = new XMLHttpRequest();
       let url;     
         formData.append('file',file,file.name);
         url = `${URL_SERVICES}/upload/${type}/${id}/${download}`
       xhr.onreadystatechange = () => {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
             let file = JSON.parse(xhr.response).file;
             let fileOrder = new FileOrder(file, 'push')
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
  }

  deleteFile(fileId:string,type:string){
    let url = `${URL_SERVICES}/deleteFile/${fileId}/${type}`;
    return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
      console.log(res)
      if(res.file.type === 'projectFiles'){
        let fileOrder = new FileOrder(res.file,'delete')
        this.fileSource.next(fileOrder)
      }
    }))
  }

  getFileById(id:string){
    let url = `${URL_SERVICES}/searchById/file/${id}`
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      return res.file
    }))
  }
}

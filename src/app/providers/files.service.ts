import { Injectable, NgZone } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FileOrder } from '../models/file.model';
import { Socket } from "ngx-socket-io";
import { UserServices } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FilesServices {

  public fileSource = new Subject<FileOrder>();
  public files$ = this.fileSource.asObservable();

  textFormats: string[] = ['pdf'];
  imgFormats: string[] = ['png', 'jpg', 'gif', 'jpeg'];

  constructor(private zone:NgZone,
              private http:HttpClient,
              private socket: Socket,
              private _userServices:UserServices) {
               }

  filesSocket(){
    return this.socket.fromEvent('files').pipe(map((fileOrder:FileOrder)=>{
      this.fileSource.next(fileOrder)
    }))
  }
  
  emitFile(payload:any){
    this.socket.emit('files',payload)
  }

  uploadFile(file: File, type: string, id: string, download:boolean=false) {
     this.zone.run( ()=>{
       let formData = new FormData();
       let xhr = new XMLHttpRequest();
       let url;     
         formData.append('file',file,file.name);
         url = `${URL_SERVICES}upload/${type}/${id}/${download}`
       xhr.onreadystatechange = () => {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
             let file = JSON.parse(xhr.response).file;
             let fileOrder = new FileOrder(file, 'post')
             this.fileSource.next(fileOrder)
             fileOrder.order = 'push';
             let payload = { fileOrder, room: id }
             this.emitFile(payload);
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

  deleteFile(fileId:string,projectId:string){
    let url = `${URL_SERVICES}deleteFile/${fileId}`;
    return this.http.delete(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
        let fileOrder = new FileOrder(res.file,'delete');
        this.fileSource.next(fileOrder);
        let payload = {fileOrder,room:projectId}
        this.emitFile(payload)
    }))
  }

  getFileById(id:string){
    let url = `${URL_SERVICES}searchById/file/${id}`
    return this.http.get(url, {headers:this._userServices.headers}).pipe(map((res:any)=>{
      return res.file
    }))
  }
}

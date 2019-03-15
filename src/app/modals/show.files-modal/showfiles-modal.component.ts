import { Component, OnInit } from '@angular/core';
import { FileModel, FileOrder } from '../../models/file.model';
import { ShowFilesModalController } from './showfilesModal.controller';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UploadFilesServices } from 'src/app/providers/upload-files.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-files-modal",
  templateUrl: "./showfiles-modal.component.html",
  styleUrls: ["./showfiles-modal.component.css"]
})
export class ShowFilesModalComponent implements OnInit {
  
  file:FileModel;
  type:string

  textFormats:string[] = ['pdf'];
  imgFormats: string[] = ['png', 'jpg', 'gif', 'jpeg'];

   fileSubscription : Subscription = null;

  constructor(
    public _modalController: ShowFilesModalController,
    private http:HttpClient,
    private _uploadFilesService:UploadFilesServices
  ) {
  }
  ngOnInit() {

    this._modalController.notification.subscribe(()=>{
      if(this._modalController.id){
        
        this._uploadFilesService.files$.subscribe((fileOrder:FileOrder)=>{
           if(fileOrder.order === 'getById'){
             this.file = fileOrder.file;
           }
        })
        this._uploadFilesService.getFileById(this._modalController.id).subscribe()
      }
    })  
  }

  downloadFile(source:string) {
    if(this.file.format === 'pdf'){
      this.getFileBlob(source).subscribe(res => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(res);
        a.download = this.file.title;
        document.body.appendChild(a);
        a.click();
      });
    }
  }

  getFileBlob(url: string) {
    return this.http.get(url, { observe: 'response', responseType: 'blob' })
      .pipe(map((res: any) => {
        return new Blob([res.body], { type: res.headers.get('Content-Type') });
      }))
  }

  /////////////////////// PDF-VIEWER  /////////////////////////////
  loaded = false;
  pageCount: number;
  pagesRendered = 0;
  progress=0;

  pdfLoaded = event => {
    this.pageCount = event["numPages"];
  };

  pageRendered = () => { 
    this.pagesRendered += 1;
    this.progress = ((100*this.pagesRendered)/this.pageCount);
    if (this.pagesRendered === this.pageCount) {
      this.renderComplete();
    }
  };

  renderComplete = () => {
    this.loaded = true;
    this.pagesRendered = 0;
  };

  hideModal() {
    this.file = null;
    if(this.fileSubscription != null){this.fileSubscription.unsubscribe()}
  }

}

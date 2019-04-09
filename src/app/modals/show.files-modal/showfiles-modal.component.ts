import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileModel} from '../../models/file.model';
import { ShowFilesModalController } from './showfilesModal.controller';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UploadFilesServices } from 'src/app/providers/upload-files.service';

@Component({
  selector: "app-files-modal",
  templateUrl: "./showfiles-modal.component.html",
  styleUrls: ["./showfiles-modal.component.css"]
})
export class ShowFilesModalComponent implements OnInit {

  @ViewChild('myImg') myImg :ElementRef
  
  file:FileModel;

  textFormats:string[] = ['pdf'];
  imgFormats: string[] = ['png', 'jpg', 'gif', 'jpeg'];

  constructor(
    public _modalController: ShowFilesModalController,
    private http:HttpClient,
    private _uploadFilesService:UploadFilesServices
  ) {
  }
  ngOnInit() {
    this._modalController.notification.subscribe(()=>{
      if(this._modalController.id){
        this._uploadFilesService.getFileById(this._modalController.id).subscribe((file)=>{
          this.file=file;
          console.log(this.file)
        })
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
    }else if (this.imgFormats.indexOf(this.file.format)>=0){
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
  }

}

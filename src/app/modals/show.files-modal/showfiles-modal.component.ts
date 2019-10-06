import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileModel} from '../../models/file.model';
import { ShowFilesModalController } from './showfilesModal.controller';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FilesServices } from 'src/app/providers/files.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: "app-files-modal",
  templateUrl: "./showfiles-modal.component.html",
  styleUrls: ["./showfiles-modal.component.css"]
})
export class ShowFilesModalComponent implements OnInit {

  @ViewChild('myPdf') myPdf : ElementRef;
  @ViewChild('myImg') myImg : ElementRef;
  
  file:FileModel;

  textFormats:string[] = ['pdf'];
  imgFormats: string[] = ['png', 'jpg', 'gif', 'jpeg','JPG'];

  constructor(
    public _modalController: ShowFilesModalController,
    private http:HttpClient,
    private _filesService:FilesServices
  ) {}
  
  ngOnInit() { 
    this._modalController.notification.subscribe(()=>{
      if(this._modalController.id){
        this._filesService.getFileById(this._modalController.id).subscribe((file)=>{
          this.file=file;
        })
      }
    })  
  }

  downloadFile(source:string) {
   if(environment.production){
    this._filesService.getSignedAwsUrl(this.file).subscribe((res:any)=>{
     this.getFileBlob(res).subscribe()
    })
   }else{
     this.getFileBlob(source).subscribe()
   }
  }

  getFileBlob(url: string) {
    return this.http.get(url, { observe: 'response', responseType: 'blob' })
      .pipe(map((res: any) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([res.body], { type: res.headers.get('Content-Type') }));
        a.download = this.file.title;
        document.body.appendChild(a);
        a.click();
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

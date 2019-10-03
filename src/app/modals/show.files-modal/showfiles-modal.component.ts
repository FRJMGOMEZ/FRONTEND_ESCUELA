import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileModel} from '../../models/file.model';
import { ShowFilesModalController } from './showfilesModal.controller';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FilesServices } from 'src/app/providers/files.service';


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
      this.getFileBlob(source).subscribe(res => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(res);
        a.download = this.file.title;
        document.body.appendChild(a);
        a.click();
      });
  }

  getFileBlob(url: string) {

    /*if (environment.production){

      AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      });
      const s3 = new S3();
      var params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Body: this.file.data,
        Key: this.file.name
      }
      s3.upload(params, function (err, data) {
        if (err) {
          return res.status(500).json({ ok: false, err })
        }
        resolve({ fileName, data, extension })
      });
    }*/

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

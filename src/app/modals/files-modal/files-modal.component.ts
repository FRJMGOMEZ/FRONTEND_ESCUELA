import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FilesModalController } from './filesModal.controller';
import { ChatServices } from '../../providers/chat.service';
import { title } from 'process';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessagesService } from '../../providers/messages.service';
import { ProjectServices } from '../../providers/project.service';

@Component({
  selector: "app-files-modal",
  templateUrl: "./files-modal.component.html",
  styleUrls: ["./files-modal.component.css"]
})
export class FilesModalComponent implements OnInit {
  
  type:string
  file: string;

  @ViewChild("myPdf") myPdf: ElementRef;

  constructor(
    public _modalController: FilesModalController,
    private _chatServices: ChatServices,
  ) {
 
  }

  ngOnInit() {
    this._modalController.notification.subscribe((file)=>{
      this.file = file;
      this.type = this._modalController.type;
    })  
  }

  downloadFile() {
    this._chatServices.getFile(this.myPdf["src"]).subscribe(res => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(res);
      a.download = title;
      document.body.appendChild(a);
      a.click();
    });
  }

  hideModal() {
    if(this.file && this.progress != 100){
      window.location.reload()
    }
    this.file = null;
    this._modalController.hideModal();
  }

  toMyFiles = () => {
    if (this.loaded) {
      this.file = null
      this.progress = 0;
    }
  };

  /////////////////////// PDF-VIEWER BUG CONTROLLER /////////////////////////////

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

}

import { Component, OnInit, Renderer2,ElementRef, ViewChild } from '@angular/core';
import { FilesModalController } from './filesModal.controller';
import { ChatServices } from '../../providers/chat.service';
import { title } from 'process';
import { ProjectServices } from '../../providers/project.service';
import { UserServices } from '../../providers/user.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessagesService } from '../../providers/messages.service';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: "app-files-modal",
  templateUrl: "./files-modal.component.html",
  styleUrls: ["./files-modal.component.css"]
})
export class FilesModalComponent implements OnInit {
  
  messages: Message[] = [];

  file: string;

  token: string;

  @ViewChild("myPdf") myPdf: ElementRef;

  constructor(
    public _modalController: FilesModalController,
    private renderer: Renderer2,
    private el: ElementRef,
    private _chatServices: ChatServices,
    private _projectServices: ProjectServices,
    private _userServices: UserServices,
    private _messagesService: MessagesService
  ) {
    this.token = this._userServices.token;
  }

  ngOnInit() {
    this._modalController.notification.subscribe(res => {
      if (res) {
        if (res.fileName) {
          this.file = res.fileName;
        }
      }

      if (!res) {
        this._messagesService
          .getMessages(this._modalController.id, this.token)
          .subscribe(messages => {
            for (let message of messages) {
              if (message.titulo) {
                this.messages.push(message);
              }
            }
            console.log(this.messages);
          });
      }
    });
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
    this.messages = [];
    this._modalController.hideModal();
  }
  
  showDocument(fileName: string) {
    this.file = fileName;
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

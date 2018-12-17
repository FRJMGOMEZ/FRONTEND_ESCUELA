import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProjectComponent } from '../project.component';
import { User } from 'src/app/models/user.model';
import { Project } from '../../../../models/project.model';
import { MessagesService } from '../../../../providers/messages.service';
import { Message } from 'src/app/models/message.model';
import { ChatServices } from '../../../../providers/chat.service';
import { UploadFilesModalController } from '../../../../modals/upload-files-modal/uploadFilesModalController';
import { UploadFilesServices } from '../../../../providers/upload-files.service';
import { ImgModalController } from '../../../../modals/img-modal/imgModal.controller';
import { title } from 'process';
import { FilesModalController } from '../../../../modals/files-modal/filesModal.controller';


@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.less"]
})
export class MessagesComponent implements OnInit {

  userOnline: User;
  token: string;

  project: Project;

  messages: any[] = [];

  message: string;

  imgUpload: File;
  temporaryImg: any;

  fileUpload:File;
  fileIcon: string;
  fileTitle:string;

  constructor(
    private projectComponent: ProjectComponent,
    private _messageServices: MessagesService,
    private _chatServices: ChatServices,
    private _uploadFilesModalController: UploadFilesModalController,
    private _uploadFilesServices: UploadFilesServices,
    private _imgModalController:ImgModalController,
    private _filesModalController:FilesModalController
  ) {
    this.userOnline = this.projectComponent.userOnline;
    this.project = this.projectComponent.project;
    this.token = this.projectComponent.token;
  }

  ngOnInit() {

    this.getMessages();

    this.projectComponent.notification.subscribe(() => {
      this.project = this.projectComponent.project;

      this.getMessages();
    });

    this._chatServices.getMessages().subscribe((message: Message) => {
      this.messages.push(message);
    });
  }

  getMessages() {
    this._messageServices
      .getMessages(this.project._id, this.token)
      .subscribe(messages => {
        this.messages = messages;
      });
  }

  selectImg(file: File) {

    if (!file) {
      this.imgUpload = null;
      return;
    }

    if(file.type.indexOf('pdf') >= 0 ){

      this.fileTitle = file.name;
      this.fileIcon = 'pdf.png'
      this.fileUpload = file;
      this.imgUpload=null

    } else if (file.type.indexOf('image') >= 0){

      this.imgUpload = file;
      let reader = new FileReader();
      let urlImgTemp = reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.temporaryImg = reader.result;
      };
    }
  }

  sendMessage() {
    if (this.imgUpload) {
      this._uploadFilesServices
        .updateFile(this.imgUpload, "imgProyectos", this.project._id)
        .then((res: any) => {
          let message = new Message(
            this.userOnline._id,
            this.project._id,
            this.message,
            res.fileName
          );
          this._messageServices
            .postMessage(message, this.token)
            .subscribe(messageSaved => {
              this._chatServices.sendMessage(messageSaved);
              this.message = "";
              this.temporaryImg = "";

              this.projectComponent.notification.emit({
                image: messageSaved.img
              });
            });
        })
        .catch(res => {
          console.log(res);
        });
    }else if(this.fileUpload){

      this._uploadFilesServices.updateFile(this.fileUpload,'files',this.project._id)
      .then((res:any)=>{

        let message = new Message(this.userOnline._id, this.project._id, this.message);
        message.file = res.fileName;
        if(res.fileName.indexOf('pdf')){
          message.img = 'pdf.png';
        }
        message.titulo = this.fileTitle;

        this._messageServices
          .postMessage(message, this.token)
          .subscribe(messageSaved => {

            this._chatServices.sendMessage(messageSaved);
            this.message = "";
            this.fileIcon='';
            this.fileTitle=''
            this.projectComponent.notification.emit({
              file: messageSaved.file
            });
          });
      })
    }
    
    else {
      let message = new Message(
        this.userOnline._id,
        this.project._id,
        this.message
      );
      this._messageServices
        .postMessage(message, this.token)
        .subscribe(messageSaved => {
          this._chatServices.sendMessage(messageSaved);
          this.message = "";
          this.imgUpload = null;
        });
    }}

  openModalUpload() {
    this._uploadFilesModalController.showModal(this.project._id, "mensajes");
  }

  upload(img?: any, id?: string) {

    this._imgModalController.showModal(id)

    if(img){
      this._imgModalController.notification.emit({ src: img.src })
    }

    else{

      this._imgModalController.notification.emit()
    }
  }

  openFile(file:string){
 
   this._filesModalController.showModal(this.projectComponent.project._id)
   this._filesModalController.notification.emit({fileName:file})
   this._filesModalController.notification.emit()

  }
}

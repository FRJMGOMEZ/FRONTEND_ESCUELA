import { Component, OnInit, Input } from '@angular/core';
import { ProjectComponent } from '../project.component';
import { User } from 'src/app/models/user.model';
import { MessagesService } from '../../../../providers/messages.service';
import { Message } from 'src/app/models/message.model';
import { ChatServices } from '../../../../providers/chat.service';
import { UploadFilesServices } from '../../../../providers/upload-files.service';
import { ImgModalController } from '../../../../modals/img-modal/imgModal.controller';
import { FilesModalController } from '../../../../modals/files-modal/filesModal.controller';
import { MessageOrder } from '../../../../models/message.model';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.less"]
})
export class MessagesComponent implements OnInit {

  userOnline: User;
 
  @Input()projectId:string
  messages: any[] = [];
  message:string; 
  imgUpload: File;
  temporaryImg: any;

  fileUpload:File;
  fileTitle:string;


  constructor(
    private projectComponent: ProjectComponent,
    private _messageServices: MessagesService,
    private _uploadFilesServices: UploadFilesServices,
    private _chatServices:ChatServices,
    private _filesModalController:FilesModalController,
    private _imgModalController:ImgModalController
  ) {
    this.userOnline = this.projectComponent.userOnline
  }

  ngOnInit() { 
    this._messageServices.messages$.subscribe((messageOrder:MessageOrder) => {
      if(messageOrder.order === 'push'){
        this._chatServices.sendMessage(messageOrder.message)
      }else if (messageOrder.order === 'get'){
        this.messages.push(messageOrder.message)
      }
    })
    this.checkFrom(this.projectComponent.project.messages.length).then((res:any)=>{
      this._messageServices.getMessages(this.projectId,res.from).subscribe()
    })
    this._chatServices.getMessages().subscribe((message: Message) => {
      this.messages.push(message);
    });

    this._uploadFilesServices.files$.subscribe((res:any)=>{
      let message;
       if(res.type === 'filesProject'){
         message = new Message(this.userOnline._id, this.projectId, this.message, null,res.file,this.fileTitle)
        
       }
       if(res.type === 'imagesProject'){
         message = new Message(this.userOnline._id, this.projectId, this.message,res.file,null,this.fileTitle)
       }
      this._messageServices.postMessage(message).subscribe()
    })
  }

  checkFrom(messages: number) {
    return new Promise((resolve, reject) => {
      let from = messages - 15;
      if (from > 0) {
        resolve(from)
      } else {
        resolve(0)
      }
    })
  }

  selectFile(file: File) {
    if (!file) {
      this.imgUpload = null;
      return;
    }
    if(file.type.indexOf('pdf') >= 0 ){
      this.fileTitle = file.name;
      this.fileUpload = file;
      this.imgUpload=null;

    } else if (file.type.indexOf('image') >= 0){
      this.imgUpload = file;
      this.fileTitle = file.name;
      let reader = new FileReader();
      let urlImgTemp = reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.temporaryImg = reader.result;
      };
    }
  }

  openFile(file:string){
    this._filesModalController.showModal('filesProject')
    this._filesModalController.notification.emit(file)
  }

  showImg(img:any){
    this._imgModalController.showModal('imagesProject')
    this._imgModalController.notification.emit(img.src)
  }

  sendMessage() {
    if (this.imgUpload) {
      console.log(this.imgUpload)
      this._uploadFilesServices.updateFile(this.imgUpload, "imagesProject", this.projectId) 
    } else if(this.fileUpload){
      this._uploadFilesServices.updateFile(this.fileUpload,'filesProject',this.projectId)
    }else{
      let message = new Message(this.userOnline._id, this.projectId, this.message, null)
      this._messageServices.postMessage(message).subscribe()
    }}
}

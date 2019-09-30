import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Message  } from 'src/app/models/message.model';
import { ChatServices } from '../../../../providers/chat.service';
import { FilesServices } from '../../../../providers/files.service';
import { MessageOrder } from '../../../../models/message.model';
import { Subscription } from 'rxjs';
import { FileOrder } from '../../../../models/file.model';
import { ProjectServices } from '../../../../providers/project.service';
import { MainProjectsComponent } from '../../mainProjects.component';
import { UserServices } from '../../../../providers/user.service';
import { ShowFilesModalController } from '../../../../modals/show.files-modal/showfilesModal.controller';
import { ProjectComponent } from '../project.component';
import { SwalService } from '../../../../providers/swal.service';
import * as _ from 'underscore';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.less"]
})
export class MessagesComponent implements OnInit, OnDestroy{
  
  @ViewChild("scroll") scroll: ElementRef;
  messages: Message[] = [];

  message: string;
  download:boolean=true

  imgUpload: File;
  temporaryImg: any;

  fileUpload: File;
  fileTitle: string;

  messagesSubscription: Subscription = null;
  filesSubscription: Subscription = null;
  socketSubscription:Subscription=null;

  loading:boolean = false

  constructor(
    private _filesServices: FilesServices,
    public _chatServices: ChatServices,
    public projectComponent: ProjectComponent,
    public mainProjectsComponent:MainProjectsComponent,
    public _projectServices: ProjectServices,
    public _userServices: UserServices,
    private _showFilesModalController: ShowFilesModalController,
    private _swalServices:SwalService
  ) {
  }

  ngOnInit() {

    this.socketSubscription = this._chatServices.messagesSocket().subscribe()
    
    this.messagesSubscription = this._chatServices.messages$.subscribe(
      (messageOrder: MessageOrder) => {
       if (messageOrder.order === 'post'){
            setTimeout(() => {
              this.scrollToBottom();
            });
          this.messages.push(messageOrder.message)
        }else if (messageOrder.order === "delete") {
          this.messages = this.messages.filter(message => {
            return message._id != messageOrder.message._id;
          });
        }
      }
    );
      
    this.filesSubscription=this._filesServices.files$.subscribe((fileOrder: FileOrder) => {
      if (fileOrder.order === "post") {
        let message;
          message = new Message(
            this._userServices.userOnline._id,
            this._projectServices.projectSelectedId,
            this.message,
            fileOrder.file._id
          );
        this._chatServices.postMessage(message,this._projectServices.projectSelectedId).subscribe();
      }else if(fileOrder.order === 'delete'){
        this.messages.forEach((message:any)=>{
          if(message.file){
            if(message.file._id === fileOrder.file._id){
              this._chatServices.deleteMessage(message._id).subscribe()
            }
          }
          })
      }
    });
  }
  ngAfterViewInit(): void {
    this.getMessages();
   
  }

  getMessages() {
    this.checkFrom().then((from: number) => {
      this._chatServices.getMessages(this._projectServices.projectSelectedId, from).subscribe((messages) => {
        if (this.messages.length === 0) {
          this.messages = _.sortBy(messages,(message)=>{
            return message.date
          })
          setTimeout(()=>{
            this.scrollToBottom()
            return
          })
        } else {
          let percent = this.messages.length * 100 / this._chatServices.messagesCount;
          percent = percent / 100;
          this.messages.forEach((message)=>{
            this.messages.unshift(message)
          })
          setTimeout(()=>{
            this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight * percent;
            let heightPerCard = this.scroll.nativeElement.scrollHeight / this.messages.length;
            this.scroll.nativeElement.scrollTop -=heightPerCard*3;
          })
        }
      });
    })
  }

  checkFrom() {
    return new Promise((resolve, reject) => {
        if(this.messages.length === 0){
          if(this._chatServices.messagesCount <= 15){
            resolve(0)
          }else{
            resolve(this._chatServices.messagesCount - 15)
          }
        }else{
          if(this._chatServices.messagesCount-this.messages.length -15 >=0){
            resolve(this._chatServices.messagesCount-this.messages.length-15)
          }else{
             resolve(0)
          }
        }
    });
  }

  scrollToBottom(): void {
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  }

  selectFile(file: File) {
    if (!file) {
      this.imgUpload = null;
      return;
    }
    if (file.type.indexOf("pdf") >= 0) {
      this.fileTitle = file.name;
      this.fileUpload = file;
      this.imgUpload = null;
      this.temporaryImg = null;
    } else if (file.type.indexOf("image") >= 0) {
      this.imgUpload = file;
      this.fileTitle = file.name;
      let reader = new FileReader();
      let urlImgTemp = reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.temporaryImg = reader.result;
      };
      this.fileUpload = null;
    }else{
     this._swalServices.notSupported
    }
  }

  sendMessage() {
    if (this.imgUpload) {
      this._filesServices.uploadFile(
        this.imgUpload,
        "Project",
        this._projectServices.projectSelectedId,
         this.download
      );
      this.imgUpload = null;
      this.temporaryImg = null;
    } else if (this.fileUpload) {
      this._filesServices.uploadFile(
        this.fileUpload,
        "Project",
        this._projectServices.projectSelectedId,
        this.download
      )
      this.fileUpload = null;
    } else {
      if(this.message.trim().length >0){
        let message = new Message(
          this._userServices.userOnline._id,
          this._projectServices.projectSelectedId,
          this.message
        );
        this._chatServices.postMessage(message,this._projectServices.projectSelectedId).subscribe(()=>{
          this.message='';
        });
      }else{
        return
      }
    }
  }

  openFile(id: string) {
    this._showFilesModalController.showModal(id);
    this._showFilesModalController.notification.emit();
  }
  
  ngOnDestroy() {
    this.filesSubscription.unsubscribe()
    this.messagesSubscription.unsubscribe();
   this.socketSubscription.unsubscribe();
  }
}

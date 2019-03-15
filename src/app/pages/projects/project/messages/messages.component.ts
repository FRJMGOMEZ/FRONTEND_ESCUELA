import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Message  } from 'src/app/models/message.model';
import { ChatServices } from '../../../../providers/chat.service';
import { UploadFilesServices } from '../../../../providers/upload-files.service';
import { MessageOrder } from '../../../../models/message.model';
import { Subscription } from 'rxjs';
import { FileOrder, FileModel } from '../../../../models/file.model';
import { ProjectServices } from '../../../../providers/project.service';
import { MainProjectsComponent } from '../../mainProjects.component';
import { UserServices } from '../../../../providers/user.service';
import { ShowFilesModalController } from '../../../../modals/show.files-modal/showfilesModal.controller';
import { ProjectComponent } from '../project.component';


@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.less"]
})
export class MessagesComponent implements OnInit, OnDestroy {
  @ViewChild("scroll") scroll: ElementRef;

  userOnline: User;

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
    private _uploadFilesServices: UploadFilesServices,
    private _chatServices: ChatServices,
    public projectComponent: ProjectComponent,
    public mainProjectsComponent:MainProjectsComponent,
    public _projectServices: ProjectServices,
    private _userServices: UserServices,
    private _showFilesModalController: ShowFilesModalController
  ) {
    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

    this.messagesSubscription = this._chatServices.messages$.subscribe(
      (messageOrder: MessageOrder) => {
        if (messageOrder.order === "get") {
            this.messages.unshift(messageOrder.message);
            setTimeout(() => {
              this.scrollToBottom()
            })      
        }else if (messageOrder.order === 'push'){
          this.messages.push(messageOrder.message)
          setTimeout(()=>{
            this.scrollToBottom()
          })
        }else if (messageOrder.order === "delete") {
          this.messages = this.messages.filter(message => {
            return message._id != messageOrder.message._id;
          });
        }
      }
    );
    this.checkFrom(this.projectComponent.messagesCount).then((res: any) => {
      this._chatServices
        .getMessages(this.mainProjectsComponent.projectSelectedId, res)
        .subscribe();
    });

    this.socketSubscription=this._chatServices.messagesSocket().subscribe()

    this._uploadFilesServices.files$.subscribe((fileOrder: FileOrder) => {
      if (fileOrder.order === "push") {
        let message = new Message(
          this.userOnline._id,
          this.mainProjectsComponent.projectSelectedId,
          this.message,
          fileOrder.file._id
        );
        this._chatServices.postMessage(message).subscribe();
      }
    });
  }
 
  scrollToBottom(): void {    
      this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  }

  getMoreMessages(){
    if(this.messages.length === this._chatServices.messagesCount ){
        if(this.messages.length < this.projectComponent.messagesCount){
          this.loading = true
          if (this.scroll.nativeElement.scrollTop === 0) {
            setTimeout(()=>{
              this.loading = false;
              if(this.scroll.nativeElement.scrollTop === 0){
                this.checkFrom(this.projectComponent.messagesCount).then((res: number) => {
                  let from;
                  let limit;
                  if (res < 15) {
                    from = 0;
                    limit = res;
                  } else {
                    from = res - 15;
                    limit = 15;
                  }
                  this._chatServices.getMessages(this.mainProjectsComponent.projectSelectedId, from, limit).subscribe()
                  this.scroll.nativeElement.scrollTop = 1
                })
              }
            },1000)
          }
        }
    }
  }

  checkFrom(messages: number) {
    return new Promise((resolve, reject) => {
      let from = messages - 15;
      if (from > 0) {
        resolve(from);
      } else {
        resolve(0);
      }
    });
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
    }
  }

  sendMessage() {
    if (this.imgUpload) {
      console.log(this.download)
      this._uploadFilesServices.putFile(
        this.imgUpload,
        "projectFiles",
        this.mainProjectsComponent.projectSelectedId,
         this.download
      );
      this.imgUpload = null;
      this.temporaryImg = null;
    } else if (this.fileUpload) {
      this._uploadFilesServices.putFile(
        this.fileUpload,
        "projectFiles",
        this.mainProjectsComponent.projectSelectedId,
        this.download
      );
      this.fileUpload = null;
    } else {
      let message = new Message(
        this.userOnline._id,
        this.mainProjectsComponent.projectSelectedId,
        this.message
      );
      this.message=null;
      this._chatServices.postMessage(message).subscribe();
    }
  }

  openFile(id: string) {
    this._showFilesModalController.showModal(id);
    this._showFilesModalController.notification.emit();
  }
  
  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
    this.socketSubscription.unsubscribe()
  }
}

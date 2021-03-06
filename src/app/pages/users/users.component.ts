import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { UploadFilesModalController } from '../../modals/upload-files-modal/upload-files-modal-controller.service';
import { Subscription } from 'rxjs';
import { SwalService } from '../../providers/swal.service';
import { FilesServices } from '../../providers/files.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit,OnDestroy {
  
  from:number=0

  @ViewChild('input') input:ElementRef

  searchMode:boolean=false;
  getMode:boolean=false;

  fileSubscription:Subscription = null;

  constructor(public _userServices:UserServices,
              private _uploadFilesModalController:UploadFilesModalController,
              private _fileServices:FilesServices,
              private _swalServices:SwalService) {}

  ngOnInit() {
    this.getMode=true;
    this._userServices.getUsers().subscribe()
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number
    }
    if(this.getMode){
      this._userServices.getUsers(this.from).subscribe()
    }
    if(this.searchMode){
      this._userServices.searchUsers(this.input.nativeElement.value,this.from).subscribe()
    }
  }

  changeImg(id:string) {
    this._uploadFilesModalController.showModal(id, 'users')
    this.fileSubscription = this._fileServices.files$.subscribe((fileOrder) => {
      if (fileOrder.order === 'post') {
        if (fileOrder.file.type === 'users') {
          this._userServices.users.forEach((user,index)=>{
                if(user._id === id){
                  this._userServices.users[index].img = fileOrder.file;
                }
          })
          this.fileSubscription.unsubscribe()
        }
      }
    })
  }

  deleteUser(id:string){
    this._swalServices.confirmDelete().then((res)=>{
       if(res){
         this._userServices.deleteUser(id).subscribe(()=>{
           this._userServices.getUsers(this.from).subscribe()
         })
       }
    })
  }

  ngOnDestroy(){
    this.from = 0;
    this._userServices.users = []
    this.getMode=false;
    this.searchMode=false;
  }
}

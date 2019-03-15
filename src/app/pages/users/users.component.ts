import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { UploadFilesModalController } from '../../modals/upload-files-modal/uploadFilesModalController';
import { Subscription } from 'rxjs';
import { SwalService } from '../../providers/swal.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit,OnDestroy {

  users:User[] = []
  
  from:number=0

  @ViewChild('input') input:ElementRef

  searchMode:boolean=false;
  getMode:boolean=true;

  userSubscription:Subscription = null;

  constructor(public _userServices:UserServices,
              private _modalUploadFilesController:UploadFilesModalController,
              private _swalServices:SwalService) {}

  ngOnInit() {
    this.userSubscription = this._userServices.users$.subscribe((userOrder: any) => {

      if (userOrder.order === 'get') {
        this.users.push(userOrder.user);
      }
      else if (userOrder.order === 'delete') {
        this.users = this.users.filter((user) => { return user._id != userOrder.user._id })
      }
      else if (userOrder.order === 'put') {
        this.users.forEach((user, index) => {
          if (user._id === userOrder.user._id) {
            this.users[index] = userOrder.user
          }
        })
      }
    })
    this._userServices.getUsers().subscribe()
  }

  checkStatus(status:boolean){
  if(status){
    return 'desactivar'
  }else{
    return 'activar'
  }
  }

  changeRole(user:User){
    let userToEdit = new User('', '', '', undefined, '', undefined, '', [],user.role)
    this._userServices.putUser(user._id,userToEdit).subscribe()
  }

  changeFrom(number: number) {
    if (this.from + number > 0) {
      this.from += number
    }
    if(this.getMode){
      this._userServices.getUsers(this.from).subscribe()
    }
    if(this.searchMode){
      this._userServices.searchUsers(this.input.nativeElement.value,this.from).subscribe()
    }
  }

  openUploadFilesModule(id:string){
    this._modalUploadFilesController.showModal(id,'users')
  }

  deleteUser(id:string){
    this._swalServices.confirmDelete().then((res)=>{
       if(res){
         this._userServices.deleteUser(id).subscribe()
       }
    })

  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe()
  }
}

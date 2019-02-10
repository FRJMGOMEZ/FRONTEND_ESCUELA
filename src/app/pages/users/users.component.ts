import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import * as _swal from "sweetalert";
import { SweetAlert } from "sweetalert/typings/core";
const swal: SweetAlert = _swal as any;
import { User } from 'src/app/models/user.model';
import { UploadFilesModalController } from '../../modals/upload-files-modal/uploadFilesModalController';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  token:string

  users:User[] = []
  
  from:number=0

  constructor(private _userServices:UserServices,
              private _modalUploadFilesController:UploadFilesModalController) {
    this.token= this._userServices.token
   }

  ngOnInit() {
    this.getUsers()
    this._modalUploadFilesController.notification.subscribe((res)=>{
       if(!res){
        this.getUsers()
       }
    })
  }
  getUsers(){
    this._userServices.getUsers().subscribe((users)=>{
    this.users = users;
    this.users = this.users.filter((user)=>{return user._id != this._userServices.userOnline._id})
    })
  }

  changeRole(user:User){
    let userToEdit = new User('', '', '', undefined, '', undefined, '', [],user.role)
    this._userServices.updateUser(user._id,userToEdit).subscribe((userUpdated)=>{
      this.users.forEach((user, index) => {
        if (user._id === userUpdated._id) {
          this.users[index] = userUpdated
        }
      })
    })
  }

  changeStatus(id:string){
    this._userServices.changeUserStatus(id).subscribe((userUpdated)=>{
      this.users.forEach((user,index)=>{
        if(user._id === userUpdated._id){
          this.users[index]=userUpdated
        }
      })
    })
  }
  searchUsers(input:string){
    this._userServices.searchUsers(input).subscribe((users)=>{
      this.users = users;
    })
  }

  deleteUser(id:string){
    swal({
      title: "Estás seguro/a",
      text: 'También cabe la opción de deshabilitar al usuario',
      icon: "warning",
      buttons: ["Cancelar", "Borrar"],
      dangerMode: true,
    })
      .then((willDelete: any) => {
        if (willDelete) {
          this._userServices.deleteUser(id).subscribe((userDeleted)=>{
            this.users = this.users.filter((user)=>{return user._id != userDeleted._id})
            swal('El usuario ha sido elminado', {
              icon: "success",
            });
          })          
        }     
    });
  }

  changeFrom(number: number) {

    if (this.from + number > 0) {
      this.from += number
    }
  }

  openUploadFilesModule(id:string){
    this._modalUploadFilesController.showModal(id,'users')
  }
}

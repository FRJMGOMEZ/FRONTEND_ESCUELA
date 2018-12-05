import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../../providers/user.service';
import * as _swal from "sweetalert";
import { SweetAlert } from "sweetalert/typings/core";
const swal: SweetAlert = _swal as any;
import { User } from 'src/app/models/user.model';
import { UploadFilesModalController } from '../../../modals/upload-files-modal/uploadFilesModalController';


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
  }

  getUsers(){

    this._userServices.getUsers().subscribe((users)=>{
      
     this.users = users

    })
  }

  changeRole(user:User){

    let userToSave = new User(user.nombre,user.email,'',undefined,'',undefined,user.rol)

    this._userServices.updateUser(user._id,userToSave).subscribe(()=>{

      this.getUsers()
    })
  }

  changeStatus(id:string){

    this._userServices.changeUserStatus(id).subscribe(()=>{

      this.getUsers()
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

          this._userServices.deleteUser(id).subscribe(()=>{

            this.getUsers()

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

    this._modalUploadFilesController.showModal(id)
  }
}

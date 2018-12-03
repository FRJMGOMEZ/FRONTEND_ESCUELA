import { Component, OnInit } from '@angular/core';
import { PasswordModalController } from './passwordModalController.service';
import { NgForm } from '@angular/forms';
import { UserServices } from '../../providers/user.service';
import swal from 'sweetalert';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  token:string;

  constructor(public _modalService:PasswordModalController, private _userServices:UserServices) {

    this.token = this._userServices.token;
   }

  ngOnInit() {
  }

  hideModal(){

    this._modalService.hideModal()

  }

  checkPassword(form:NgForm){

    if (form.value.password2 === form.value.password3) {

    let id = this._modalService.id;

    let password1 = form.value.password1;

    this._userServices.checkPassword(id,password1).subscribe((res:any)=>{

      if(res.usuarioDb){

      this.changePassword(form.value.password3)

      }

      else{swal('La contraseña no corresponde con ningún usuario','','warning')}

    })
  }
    else { swal('Las contraseñas introducidas no coinciden', '','warning') }
}


  changePassword(password3:string){

      let user = new User('', '', password3)

      this._userServices.updateUser(this._modalService.id,user).subscribe(()=>{

        this._modalService.hideModal()
        
        })
  }
}

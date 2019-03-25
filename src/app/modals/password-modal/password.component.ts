import { Component} from '@angular/core';
import { PasswordModalController } from './passwordModalController.service';
import { NgForm } from '@angular/forms';
import { UserServices } from '../../providers/user.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  constructor(public _modalService:PasswordModalController, private _userServices:UserServices) {
   }

  changePassword(form:NgForm){
    if (form.value.password2 === form.value.password3) {
    let password1 = form.value.password1
    let password2 = form.value.password2;
    let user:User = this._userServices.userOnline;
    user.password = password1;
      this._userServices.changePassword(password1,password2).subscribe(()=>{
        Swal.fire({
          showCloseButton: true,
          text: 'La contraseña ha sido cambiada'
        })
      })
  }else{
     Swal.fire({
       showCloseButton:true,
       text:'Las contraseñas han de coincidir'
     })
  } 
}

  hideModal() {
    this._modalService.hideModal()
  }
}

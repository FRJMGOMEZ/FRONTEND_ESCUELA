import { Component} from '@angular/core';
import { PasswordModalController } from './password-modal-controller.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { PasswordService } from '../../providers/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  constructor(public _modalService:PasswordModalController,
             private _passwordServices:PasswordService) {
   }

  changePassword(form:NgForm){
    if (form.value.password2 === form.value.password3) {
    let password1 = form.value.password1
    let password2 = form.value.password2;
      this._passwordServices.changePassword(password1,password2).subscribe(()=>{
        Swal.fire({
          showCloseButton: true,
          text: 'La contraseña ha sido cambiada'
        }).then(()=>{
          this.hideModal()
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

import { Component, OnInit } from '@angular/core';
import { RecoveringModalController } from '../recovering.modal,controller';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PasswordService } from '../../../providers/password.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  keepPassword:boolean
  resetCode:string
  resetCodeOk:boolean=false;

  form:FormGroup

  constructor(public _modalService:RecoveringModalController,
              private _passwordServices:PasswordService) { }

  ngOnInit() {

    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    }, { validators: this.areTheyEqual('password', 'password2') })

    this.form.setValue({
      password: '',
      password2: '',
    })
  }

  areTheyEqual(field1: string, field2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[field1].value;
      let pass2 = group.controls[field2].value;
      if (pass1 === pass2) {
        return null
      }
      return { areTheyEqual: true }
    }
  }

  checkResetCode(){
    this._passwordServices.checkResetCode(this._modalService.userEmail,this.resetCode).subscribe(()=>{
          this.resetCodeOk=true;
    })
  }

  changePassword() {
    if (this.form.value.password === this.form.value.password2) {
      this._passwordServices.setNewPassword(this.resetCode,this.form.value.password,this._modalService.userEmail).subscribe(()=>{
        Swal.fire({
          type:'success',
          showCloseButton: true,
          text:'La contraseña se ha actualizado correctamente'
        }).then(()=>{
          this.hideModal() 
        }) 
      })
    } else {
      Swal.fire({
        type:'warning',
        showCloseButton: true,
        text: 'Las contraseñas han de coincidir'
      })
    }
  }

  hideModal() {
    this._modalService.hideModal()
  }
}

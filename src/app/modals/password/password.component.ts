import { Component, OnInit } from '@angular/core';
import { PasswordModalController } from './passwordModalController.service';
import { NgForm } from '@angular/forms';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(public _modalService:PasswordModalController, private _userServices:UserServices) {
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
      this.changePassword(form.value.password3)
    })
  } 
}
  changePassword(password3:string){
      let user = new User('', '', password3)
      this._userServices.updateUser(this._modalService.id,user).subscribe(()=>{
        this._modalService.hideModal()
        })
  }
}

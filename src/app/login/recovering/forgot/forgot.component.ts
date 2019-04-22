import { Component, OnInit } from '@angular/core';
import { RecoveringModalController } from '../recovering.modal,controller';
import { PasswordService } from '../../../providers/password.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(public _modalService:RecoveringModalController,
              private _passwordServices:PasswordService) { }

  ngOnInit() {}

  hideModal(){
    this._modalService.hideModal()
  }

  forgotRequest(email:string){
    this._passwordServices.forgotPassword(email).subscribe(()=>{
      this._modalService.type = 'reset'
      this._modalService.userEmail=email;
    })
  }
}
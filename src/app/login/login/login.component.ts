import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserServices } from 'src/app/providers/user.service';
import { DemoService } from '../../providers/demo.service';
import { RecoveringModalController } from '../recovering/recovering.modal,controller';
import { Credentials } from '../../models/credentials';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  email: string;
  rememberMe: boolean = false;
  auth2: any;

  constructor(
    private _userServices: UserServices,
    private router: Router,
    public _demoService:DemoService,
    public _recoveringController:RecoveringModalController
  ) {}

  ngOnInit() {
    this._demoService.loginPopup()
    this.email = localStorage.getItem("email") || "";
    if (this.email.length > 0) {
      this.rememberMe = true;
    }
    if(this._userServices.userOnline){
      this._userServices.logout();
    }
  }

 async login(form: NgForm) {
    if (form.invalid) {
      return;}
    let credentials = new Credentials(form.value.email,form.value.password);
    await this._userServices.login(credentials, this.rememberMe).subscribe(() => {
        this.router.navigate(["/dashboard"]);
    });
  }
}


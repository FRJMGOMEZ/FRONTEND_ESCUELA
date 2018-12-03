import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgZone } from "@angular/core";


import { UserServices } from 'src/app/providers/user.service';
import { User } from 'src/app/models/user.model';

declare const gapi: any;

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
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.googleInit();

    this.email = localStorage.getItem("email") || "";
    if (this.email.length > 0) {
      this.rememberMe = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let user = new User(null, form.value.email, form.value.password);

    this._userServices.login(user, this.rememberMe).subscribe(() => {
      this.router.navigate(["/dashboard"]);
    });
  }

  googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "97587997178-d4m3g8lhl9g3flctnvmpmdonk5tgo9c7.apps.googleusercontent.com",
        cookiepolicy: "single-host-origin",
        scope: "profile email"
      });
      this.attachSignIn(document.getElementById("btnGoogle"));
    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      //let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this.zone.run(() => {
        this._userServices.loginByGoogle(token).subscribe(res => {
          if (res === true) {
            this.router.navigate(["/dashboard"]);
          } else {
            return;
          }
        });
      });
    });
  }
}


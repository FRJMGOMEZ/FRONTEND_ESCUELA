import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserServices } from 'src/app/providers/user.service';
import { User } from 'src/app/models/user.model';

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
  ) {}

  ngOnInit() {
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

}


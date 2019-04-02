import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserServices } from '../../providers/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  form:FormGroup

  constructor(private _userServices: UserServices, private router: Router) { }

  ngOnInit() {
    
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    }, { validators: this.areTheyEqual('password', 'password2') })

    this.form.setValue({
      name: '',
      email: '',
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

  registerUser() {
    if (this.form.invalid) {
      return
    }
    let values = this.form.value;
    let user = new User(values.name, values.email, values.password)
    this._userServices.postUser(user).subscribe(()=>{
      this.router.navigate(['/login'])
    })
  }
}


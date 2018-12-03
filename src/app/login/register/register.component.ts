import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import swal from "sweetalert";
import { UserServices } from '../../providers/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(private _userServices: UserServices, private router: Router) { }


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

  ngOnInit() {

    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      condiciones: new FormControl(false),
    }, { validators: this.areTheyEqual('password', 'password2') })

    this.form.setValue({
      nombre: 'Javier',
      email: 'frjmartinezgomez@gmail.com',
      password: '123',
      password2: '123',
      condiciones: true
    })
  }

  registrarUsuario() {

    if (this.form.invalid) {
      return
    }

    if (this.form.value.condiciones === false) {

      swal('DEBE DE ACEPTAR LAS CONDICIONES', '', 'warning')
      return
    }

    let values = this.form.value;
    let user = new User(values.nombre, values.email, values.password)

    this._userServices.createUser(user).subscribe(() => this.router.navigate(['/login'])
    )
  }
}


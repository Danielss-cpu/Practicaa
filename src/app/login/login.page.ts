import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit() {
  }

  // Método para validar login
  validateLogin(form: NgForm) {
    console.log(form.value); // Obtener los valores del formulario
    console.log("Valid:", form.valid); // Validar formulario 

    if (!form.valid) {
      console.log("Todos los campos son requeridos");
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (email === 'admin' && password === 'admin') {
      console.log('Login correcto');
    } else {
      console.log('Login incorrecto');
    }
  }

}

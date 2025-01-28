import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private navController: NavController) {}

  ngOnInit() {}

  // Método para manejar el inicio de sesión
  validateLogin(form: NgForm) {
    if (!form.valid) {
      console.log("Todos los campos son requeridos");
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    // Obtener las credenciales registradas
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');

    // Validar credenciales
    if (
      (email === 'admin' && password === 'admin') ||
      (email === registeredEmail && password === registeredPassword)
    ) {
      console.log("Inicio de sesión exitoso");
      this.navController.navigateForward('/inicio');
    } else {
      console.log("Credenciales incorrectas");
    }
  }
}

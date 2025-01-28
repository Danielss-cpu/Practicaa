import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
  standalone: false
})
export class RegistrarsePage implements OnInit {

  nombre: string = "";
  telefono: string = "";
  correo: string = "";
  confirmarCorreo: string = "";
  contrasena: string = "";
  confirmarContrasena: string = "";

  constructor(private router: Router) { }

  ngOnInit() {}

  // Método para manejar el registro
  onRegister(form: NgForm) {
    if (!form.valid) {
      console.log("Todos los campos son requeridos");
      return;
    }
    if (this.correo !== this.confirmarCorreo) {
      console.log("Los correos no coinciden");
      return;
    }

    // Validar que la contraseña y su confirmación coincidan
    if (this.contrasena !== this.confirmarContrasena) {
      console.log("Las contraseñas no coinciden");
      return;
    }
    localStorage.setItem('registeredEmail', this.correo);
    localStorage.setItem('registeredPassword', this.contrasena);

    console.log("Registro exitoso");
    this.router.navigate(['/login']);
  }
}

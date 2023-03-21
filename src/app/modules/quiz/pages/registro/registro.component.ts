import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@data/api/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  formularioRegistro!: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService,
    private spinner: NgxSpinnerService
  ) {
    this.formularioRegistro = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  irPagina(ruta: string) {
    this.router.navigate([ruta]);
  }
  registrarse() {
    if (this.formularioRegistro.valid) {
      this.spinner.show();
      const usuario = this.armarUsuario();
      this.loginService.registrarUsuario(usuario).subscribe(
        (res: any) => {
          this.spinner.hide();
          if (res.status === 200) {
            this.toastr.success('', 'Usuario registrado');
            localStorage.setItem('token', res.body.token);
            localStorage.setItem('usuario_id', res.body.user.id);
            setTimeout(() => {
              this.irPagina('/quiz');
            }, 300);
          }
        },
        (error: any) => {
          this.spinner.hide();
          console.log(error);
          Object.values(error.error).forEach((element: any) => {
            this.toastr.error('', element);
          });
        }
      );
    } else {
      this.toastr.error('', 'Ingrese datos válidos');
      this.formularioRegistro.markAllAsTouched();
    }
  }
  armarUsuario() {
    return {
      username: this.formularioRegistro.get('usuario')?.value,
      email: this.formularioRegistro.get('correo')?.value,
      password: this.formularioRegistro.get('contrasena')?.value,
    };
  }
}

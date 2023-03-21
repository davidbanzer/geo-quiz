import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@data/api/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-inicio-sesion',
	templateUrl: './inicio-sesion.component.html',
	styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent implements OnInit {
	formularioInicioSesion!: FormGroup;
	@ViewChild('inputContrasena') inputContrasena!: any;
	@ViewChild('iconoOjo') iconoOjo!: any;
	constructor(
		private router: Router,
		private loginService: LoginService,
		private toastr: ToastrService,
		private spinner: NgxSpinnerService
	) {
		this.formularioInicioSesion = new FormGroup({
			usuario: new FormControl('', [Validators.required]),
			contrasena: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit(): void {}
	iniciarSesion() {
		if (this.formularioInicioSesion.valid) {
			this.spinner.show();
			const usuario = this.armarUsuario();
			this.loginService.iniciarSesion(usuario).subscribe(
				(res: any) => {
					this.spinner.hide();
					if (res.status === 200) {
						this.toastr.success('', 'Usuario loggeado');
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
			//this.irPagina('/quiz');
		} else {
			this.toastr.error('', 'Ingrese datos válidos');
			this.formularioInicioSesion.markAllAsTouched();
		}
	}
	mostrarContrasena() {
		if (this.inputContrasena.nativeElement.type == 'password') {
			this.inputContrasena.nativeElement.type = 'text';
			this.iconoOjo.nativeElement.className = 'bi bi-eye-slash';
		} else {
			this.inputContrasena.nativeElement.type = 'password';
			this.iconoOjo.nativeElement.className = 'bi bi-eye ';
		}
	}
	irPagina(ruta: string) {
		this.router.navigate([ruta]);
	}
	armarUsuario() {
		return {
			username: this.formularioInicioSesion.value.usuario,
			password: this.formularioInicioSesion.value.contrasena,
		};
	}
}

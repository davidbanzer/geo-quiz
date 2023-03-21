import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@data/api/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  cerrarSesion() {
    this.spinner.show();
    debugger;
    this.loginService.cerrarSesion().subscribe(
      (res: any) => {
        this.spinner.hide();
        localStorage.clear();
        this.toastr.success('', 'Sesión cerrada');
        setTimeout(() => {
          this.irPagina('/quiz/inicio-sesion');
        }, 300);
      },
      (error: any) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  irPagina(ruta: string) {
    this.router.navigate([ruta]);
  }
}

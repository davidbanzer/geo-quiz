import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opcionSeleccionada?: number;
  menu = [
    {
      titulo: 'Aprender capitales',
      descripcion: 'Aquí podrás ver un listado con las capitales y banderas de todos los países.',
      ruta: '/quiz/aprender-capitales'
    },
    {
      titulo: 'Iniciar Quiz',
      descripcion: 'Aquí podrás iniciar un quiz para comprobar tus conocimientos.',
      ruta: '/quiz/iniciar-quiz'
    },
    {
      titulo: 'Tabla de posiciones',
      descripcion: 'Aquí podrás ver la tabla de posiciones de los mejores jugadores.',
      ruta: '/quiz/tabla-posiciones'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.validarSesion();
  }

  setIndex(index: number) {
     this.opcionSeleccionada = index;
  }

  irPagina(pagina: string){
    setTimeout(() => {
      this.router.navigate([pagina]);
    }, 300);
  }
  validarSesion(){
    if(localStorage.getItem('token') === null){
      this.router.navigate(['/quiz/inicio-sesion'])
    }
  }

}

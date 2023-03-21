import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprenderCapitalesComponent } from './pages/aprender-capitales/aprender-capitales.component';
import { HomeComponent } from './pages/home/home.component';
import { IniciarQuizComponent } from './pages/iniciar-quiz/iniciar-quiz.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TablaPosicionesComponent } from './pages/tabla-posiciones/tabla-posiciones.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aprender-capitales',
    component: AprenderCapitalesComponent,
  },
  {
    path: 'iniciar-quiz',
    component: IniciarQuizComponent,
  },
  {
    path: 'tabla-posiciones',
    component: TablaPosicionesComponent
  },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AprenderCapitalesComponent } from './pages/aprender-capitales/aprender-capitales.component';
import { IniciarQuizComponent } from './pages/iniciar-quiz/iniciar-quiz.component';
import { TablaPosicionesComponent } from './pages/tabla-posiciones/tabla-posiciones.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';



@NgModule({
  declarations: [
    HomeComponent,
    AprenderCapitalesComponent,
    IniciarQuizComponent,
    TablaPosicionesComponent,
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }

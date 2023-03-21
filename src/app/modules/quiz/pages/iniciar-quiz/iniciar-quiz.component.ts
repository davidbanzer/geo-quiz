import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '@data/api/quiz.service';
import { RankingService } from '@data/api/ranking.service';
import { Pregunta } from '@data/interfaces/Pregunta';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-iniciar-quiz',
  templateUrl: './iniciar-quiz.component.html',
  styleUrls: ['./iniciar-quiz.component.scss'],
})
export class IniciarQuizComponent implements OnInit {
  preguntas: Pregunta[] = [];
  contadorPreguntas: number = 0;
  mostrarResultados: boolean = false;
  textoBoton = 'Siguiente';
  temporizador: any;
  tiempo = 0;
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  segundos = Math.floor((this.ctime % (1000 * 60)) / 1000);
  minutos = Math.floor((this.ctime % (1000 * 60 * 60)) / (1000 * 60));
  formatoSegundos = '00';
  formatoMinutos = '00';
  respuestaUsuario: any;
  respuestasCorrectas = 0;
  botonDesactivado = true;
  constructor(
    private quizService: QuizService,
    private rankingService: RankingService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPreguntas();
    this.mezclarPreguntas();
    this.limitarPreguntas(15);
    this.iniciarTemporizador();
  }
  obtenerPreguntas() {
    this.preguntas = this.quizService.listaPreguntas();
  }
  mezclarPreguntas() {
    this.preguntas.sort(() => Math.random() - 0.5);
  }
  limitarPreguntas(limite: number) {
    this.preguntas = this.preguntas.slice(0, limite);
  }
  siguientePregunta() {
    this.botonDesactivado = true;
    if (this.contadorPreguntas == this.preguntas.length - 2) {
      this.textoBoton = 'Finalizar';
      clearInterval(this.temporizador);
    }
    if (this.contadorPreguntas <= this.preguntas.length - 1) {
      this.contadorPreguntas++;
    }
    if (this.contadorPreguntas == this.preguntas.length) {
      this.spinner.show();
      const puntaje = this.armarPuntaje();
      this.rankingService.agregarPuntaje(puntaje).subscribe(
        (res: any) => {
          this.spinner.hide();
          this.toastr.success('', 'Puntaje agregado correctamente')
          this.mostrarResultados = true;
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      );
    }
  }
  iniciarTemporizador() {
    this.temporizador = setInterval(() => {
      this.tiempo++;
      if (this.segundos < 59) {
        this.segundos++;
      } else {
        this.segundos = 0;
        this.minutos++;
      }
      this.formatoSegundos =
        this.segundos < 10 ? '0' + this.segundos : this.segundos.toString();
      this.formatoMinutos =
        this.minutos < 10 ? '0' + this.minutos : this.minutos.toString();
    }, 1000);
  }
  mostrarClase(pregunta: any) {
    this.botonDesactivado = false;
    if (pregunta == 0) {
      this.respuestaUsuario = 'A';
    } else if (pregunta == 1) {
      this.respuestaUsuario = 'B';
    } else if (pregunta == 2) {
      this.respuestaUsuario = 'C';
    }
    // En caso de que la respuesta sea correcta
    if (
      this.respuestaUsuario == this.preguntas[this.contadorPreguntas].respuesta
    ) {
      this.respuestasCorrectas++;
      let opciones = document.querySelectorAll('div.option');
      let indicador: any = document.querySelectorAll('.answers-indicator div');
      for (let i = 0; i < opciones.length; i++) {
        opciones[pregunta].classList.remove('correcto');
        opciones[i].classList.add('opcion-respondida');
      }
      opciones[pregunta].classList.add('correcto');
      indicador[this.contadorPreguntas].classList.add('correcto');
      // En caso de que la respuesta sea incorrecta
    } else {
      let opciones = document.querySelectorAll('div.option');
      let indicador: any = document.querySelectorAll('.answers-indicator div');

      for (let i = 0; i < opciones.length; i++) {
        opciones[pregunta].classList.remove('incorrecto');
        opciones[i].classList.add('opcion-respondida');
      }
      opciones[pregunta].classList.add('incorrecto');
      indicador[this.contadorPreguntas].classList.add('incorrecto');

      //  Mostrar la respuesta correcta

      // En caso de que la respuesta sea A
      if (this.preguntas[this.contadorPreguntas].respuesta == 'A') {
        setTimeout(() => {
          opciones[0].classList.add('correcto');
        }, 500);
      }
      if (this.preguntas[this.contadorPreguntas].respuesta == 'B') {
        setTimeout(() => {
          opciones[1].classList.add('correcto');
        }, 500);
      }
      if (this.preguntas[this.contadorPreguntas].respuesta == 'C') {
        setTimeout(() => {
          opciones[2].classList.add('correcto');
        }, 500);
      }
    }
  }
  armarPuntaje() {
    return {
      usuario_id: localStorage.getItem('usuario_id'),
      preguntas_acertadas: this.respuestasCorrectas,
      tiempo: this.formatoMinutos + ':' + this.formatoSegundos,
      semana: 1,
    };
  }
  irPagina(pagina: string) {
    setTimeout(() => {
      this.router.navigate([pagina]);
    }, 300);
  }
}

import { Component, OnInit } from '@angular/core';
import { QuizService } from '@data/api/quiz.service';
import { Pregunta } from '@data/interfaces/Pregunta';

@Component({
  selector: 'app-aprender-capitales',
  templateUrl: './aprender-capitales.component.html',
  styleUrls: ['./aprender-capitales.component.scss']
})
export class AprenderCapitalesComponent implements OnInit {
  listaPaises: Pregunta[] = [];
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.obtenerListaPaises();
  }
  obtenerListaPaises(){
    this.listaPaises = this.quizService.listaPreguntas().sort(this.comparar);
    console.log(this.listaPaises)
  }
  comparar(a: Pregunta, b: Pregunta){
    if(a.pais < b.pais){
      return -1;
    }
    if(a.pais > b.pais){
      return 1;
    }
    return 0;
  }
  

}

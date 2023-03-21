import { Component, OnInit } from '@angular/core';
import { RankingService } from '@data/api/ranking.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.scss']
})
export class TablaPosicionesComponent implements OnInit {
  listaPosiciones: any[] = [];
  constructor(private rankingService: RankingService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.obtenerListaPosiciones();
  }
  obtenerListaPosiciones(){
    this.spinner.show();
    this.rankingService.obtenerRanking().subscribe((res:any) => {
      this.spinner.hide();
      this.listaPosiciones = res;
      console.log(this.listaPosiciones);
    }, (error:any) => {
      this.spinner.hide();
      console.log(error);
    });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  obtenerRanking(){
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('token') })
    };
    return this.http.get(this.url + '/api/ranking/', options);
  }

  agregarPuntaje(puntaje: any){
    const options = {
      headers: new HttpHeaders({'Authorization': 'Token ' + localStorage.getItem('token') }),
    };
    return this.http.post(this.url + '/api/ranking/', puntaje, options );
  }
}

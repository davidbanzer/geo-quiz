import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: any){
    return this.http.post(this.url + '/api/login/', usuario, {observe: 'response'});
  }

  registrarUsuario(usuario: any){
    return this.http.post(this.url + '/api/register/', usuario, {observe: 'response'});
  }

  cerrarSesion(){
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('token') })
    };
    return this.http.post(this.url + '/api/logout/','', options);
  }
}

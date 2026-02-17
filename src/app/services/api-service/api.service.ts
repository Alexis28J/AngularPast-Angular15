import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly URL = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  getData(){
    // return fetch(this.URL)
    // .then(resp => resp.json())
    // .then(result => result);  //è ovvio, potrei ommettere questa riga di codice

    return this.http.get(this.URL);
  }
}

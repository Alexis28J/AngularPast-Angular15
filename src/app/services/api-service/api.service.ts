import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

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

    // .then(data => data.results)
    // .then(results => results[0])
    // .then(pokemon => pokemon.name)

    //return this.http.get(this.URL);
    return this.http.get<any>(this.URL).pipe(  //è simile a usare .then
      //passo a passo
      // map(data => data.results),    
      // map(results => results[0]),
      // map(pokemon => pokemon.name)

      //versione corta
      //map(data => data.results[0].name)
      map(data => data.results)
    )
  }
}

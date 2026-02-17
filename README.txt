Lezione di martedì 17 febbraio 2026 (ANGULAR 15): 

Oggi diamo un'occhiata ad Angular 14 (una vecchia versione di Angular)
Angular 14 (2022):  https://angular.dev/  ->  https://v14.angular.io/docs
https://v14.angular.io/tutorial/toh-pt1 

https://rxjs.dev/ / https://ngrx.io/  - librerie 


- Alla fine useremo 15 invece di 14 per questione di "stabilità".
  Per usare Angular 15:  npx @angular/cli@15 new Angular14-TimerMachine --directory ./
  Scrivere "yes"
  Would you like to add Angular routing? Yes
  Scegliere scss
  Lanciare il sito: npm run start
  Aspettare che carichi e premere ctrl + click su http://localhost:4200/ per aprirlo.
  (ATTENZIONE: a differenza delle versioni più recenti, http://localhost:4200/ non è evidenziato quindi stare attento)


- creo un altro componente:  ng g c /components/pageOne e il componente viene automaticamente importato su app.module.ts
NOTA: app.module.ts può collegare un numero n di componente e ogni componente è collegato a un componente

- ho eliminato tutto il contenuto di app.component.html tranne <router-outlet>. Poi ho aggiunto il selector <app-page-one>

- creo un servizio: ng g s /services/api-service/api

- creo un'altro componente:  ng g c /components/pageTwo   

- ho fatto il routing su app-routing.module.ts

- ho rimosso il selector app-page-one su app.component.html
  RICORDA: <router-outlet> in Angular è una direttiva segnaposto utilizzata nei template per caricare dinamicamente componenti basati sull'URL corrente

- su page-one.component.ts e su api.service.ts ho collegato il servizio. Poi su app.module.ts ho importato HttpClientModule perché funzioni
 import { HttpClientModule } from '@angular/common/http'; non lo fa automaticamente, bisogna scriverlo
 Una volta importato, ora lo si può importare su api.service.ts (in automatico) usando quickfix.

- su api.service.ts, creo una variabile per l'url e creo la funzione getData() per prendere i dati dall'API di Pokemon.
  Su page-one.component ho chiamato questa funzione con la fetch.

- Ora proveremo, invece di con la fetch, con un altro metodo a prendere i dati:
  Su api.service.ts, ho modificato il codice: return this.http.get(this.URL);
  Poi su page-one.component.ts, ho modificato il codice: apiServ.getData().subscribe(pokemon => console.log(pokemon)); 
  NOTA: per gli osservabili si usa .subscribe

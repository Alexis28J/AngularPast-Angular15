import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

  constructor(public apiServ: ApiService){
    //apiServ.getData().then(pokemon => console.log(pokemon));  
    apiServ.getData().subscribe(pokemon => console.log(pokemon));
  }

}

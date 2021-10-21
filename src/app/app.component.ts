import { Component } from '@angular/core';



//Services
import { StarshipsService } from './Services/starships.service';
import { PeopleService } from './Services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'STARWARS';

  constructor(private starshipsservice: StarshipsService, private peopleservice: PeopleService){}

}

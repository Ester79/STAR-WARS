import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

//Service
import { StarshipsService } from '../Services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  //Properties
  naves: any[] = [];

  constructor(private router: Router, private routingModule: AppRoutingModule, private starshipservice: StarshipsService) { }

  ngOnInit(): void {
    this.starshipservice.getAllstarships().subscribe(
      (data: any) => {
        this.naves = data.results;
      },
    );
  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

//Service
import { PeopleService } from '../Services/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

  //Properties
  personajes: any[] = [];




  constructor(private router: Router, private routingModule: AppRoutingModule, private peopleservice: PeopleService) { }

  ngOnInit(): void {
    this.peopleservice.getAllpeople().subscribe(
      (data: any) => {
        this.personajes = data.results;
      });

  }
}

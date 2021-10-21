import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-detail-starships',
  templateUrl: './detail-starships.component.html',
  styleUrls: ['./detail-starships.component.css']
})
export class DetailStarshipsComponent implements OnInit {

  constructor(private router: Router, private routingModule: AppRoutingModule) { }

  ngOnInit(): void {
  }

}

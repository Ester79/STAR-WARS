import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@Component({
  selector: 'app-navbar', // 'kebab-case' label to use in others Html document, <app-navbar></app-navbar>
  templateUrl: './navbar.component.html', // route to document Html to see the view
  styleUrls: ['./navbar.component.css'] // route to css document for styles
})
export class NavbarComponent implements OnInit { // import to 'app.module.ts'

  constructor(private router: Router, private routingModule: AppRoutingModule) { }

  ngOnInit(): void {
  }

}

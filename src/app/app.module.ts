import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StarshipsComponent } from './starships/starships.component';
import { DetailStarshipsComponent } from './detail-starships/detail-starships.component';
import { PeopleComponent } from './people/people.component';

//Services
import { StarshipsService } from './Services/starships.service';
import { PeopleService } from './Services/people.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    StarshipsComponent,
    DetailStarshipsComponent,
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [StarshipsService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

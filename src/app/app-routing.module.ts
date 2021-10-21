import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailStarshipsComponent } from './detail-starships/detail-starships.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'}, // First page to load
  {path: 'navbar', component: NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'starships', component:StarshipsComponent},
  {path: 'detailstartships', component:DetailStarshipsComponent},
  {path: 'people', component:PeopleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

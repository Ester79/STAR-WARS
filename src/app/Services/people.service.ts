
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  url: string = 'https://swapi.dev';
  endPoint: string = '/api/people/'; // from the api it's showed by groups of 10, it's needed to create diferents endPoint


  constructor(private httpclient: HttpClient) { }

  //Methods
  getAllpeople() {
    return this.httpclient.get(`${this.url}${this.endPoint}`);
    /*this.httpclient.get(`${this.url}${this.endPoint}`).subscribe(res => {
      console.log(res);
    })*/
  }

}

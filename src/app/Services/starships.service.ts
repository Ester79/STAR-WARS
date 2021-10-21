import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  url: string = 'https://swapi.dev';
  endPoint: string = '/api/starships/'; // from the api it's showed by groups of 10, it's needed to create diferents endPoint


  constructor(private httpclient: HttpClient) {}


  //Methods
  getAllstarships(){
    return this.httpclient.get(`${this.url}${this.endPoint}`);
    /*this.httpclient.get(`${this.url}${this.endPoint}`).subscribe(res => {
      console.log(res);
    })*/
  }

}

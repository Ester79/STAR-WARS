import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Property that contains the form
  signupForm: FormGroup;
  vacio: string = "";
  correo: string = "";
  contrasenya: string = "";


  constructor(private router: Router, private routingModule: AppRoutingModule, private formbuilder: FormBuilder) {
    this.signupForm = this.formbuilder.group({
      /*nombre: [''], //initialize the form empty*/
      /*usuario: ['', Validators.required],*/
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login(){
    console.log(this.correo);
    console.log(this.contrasenya);
  }

  //Methods
  enviar(values: any){
    console.log(values);
  }

  borrar(){
    this.signupForm.patchValue({
      /*nombre: '',
      usuario: '',*/
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

}

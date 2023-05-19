import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/shared/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup
  constructor(private formBuilder : FormBuilder,private ApiService:ApiService, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      employeeid:[''],
      password:['']
    })
  }
  login(){
    console.log("form data", this.loginForm.value);
     this.ApiService.registerUser(this.loginForm.value)
     .subscribe( res=>{ 
      console.log("api response", res);
     })
     
   }
}




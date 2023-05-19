import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getUserDetails(){
    return this.http.get("http://localhost:3000/comments");
  }

  registerUser(payload:any){
    let nwpayload = {payload:"string",userId:"A101",passWord:"123456"}
    return this.http.post<any>("http://192.168.1.89/api/GenApiServices/Login",nwpayload)
  }
}
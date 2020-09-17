import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

  constructor(private http: HttpClient){}

  postQuestion(question) {  //Add Url once we get it, have to create endpoint in ASP.NET Core
    this.http.post('', question).subscribe(res =>{
      console.log(res)
    })
  }
}
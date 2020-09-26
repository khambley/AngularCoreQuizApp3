import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    // save token in the browser
    register(credentials: any){
        return this.http.post<any>(`http://localhost:21031/api/account`, credentials).subscribe(res => {
           // localStorage.setItem('token', res)
           console.log(res)
        })
    }
    
}
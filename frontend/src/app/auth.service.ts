import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) {}

    // save token in the browser
    register(credentials: any){
        return this.http.post<any>(`http://localhost:21031/api/account`, credentials).subscribe(res => {
            this.authenticate(res)
        })
    }

    login(credentials: any){
        return this.http.post<any>(`http://localhost:21031/api/account/login`, credentials).subscribe(res => {
            this.authenticate(res)
        })
    }

    authenticate(res){
        localStorage.setItem('token', res)
        console.log(res)

        this.router.navigate(['/'])
    }
        
}
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

const baseUrl = "http://localhost:21031"
//const baseUrl = "http://dev.myquizmaker.com"
//const baseUrl = "http://localhost:3000"

@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public router: Router) {}

    // Add a "getter" property
    get isAuthenticated() {
        // returns true if token does exist (need this since getItem returns a string value, and not a boolean)
        return !!localStorage.getItem('token')
    }

    // save token in the browser
    register(credentials: any){
        return this.http.post<any>(`${baseUrl}/api/account`, credentials).subscribe(res => {
            this.authenticate(res)
        })
    }

    login(credentials: any){
        return this.http.post<any>(`${baseUrl}/api/account/login`, credentials).subscribe(res => {
            this.authenticate(res)
        })
    }

    authenticate(res){
        localStorage.setItem('token', res)
        console.log(res)

        this.router.navigate(['/'])
    }

    logout(){
        localStorage.removeItem('token')
    }
        
}
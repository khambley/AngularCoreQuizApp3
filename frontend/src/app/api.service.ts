import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    postQuestion(question){
        this.http.post('http://localhost:21031/api/questions', question).subscribe(res => {
            console.log(res)
        })
    }
}
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

//const baseUrl = "http://localhost:21031"
const baseUrl = "http://dev.myquizmaker.com"
//const baseUrl = "http://localhost:3000"

@Injectable()
export class ApiService {

    public selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    public selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(public http: HttpClient) {}

    getQuestions(quizId){
        return this.http.get(`${baseUrl}/api/questions/${quizId}`)
    }
    // getQuestions(){
    //     return this.http.get('http://localhost:21031/api/questions')
    // }
    getQuizzes(){
        return this.http.get(`${baseUrl}/api/quizzes`)  
    }
    getAllQuizzes(){
        return this.http.get(`${baseUrl}/api/quizzes/all`)  
    }

    postQuestion(question){
        this.http.post(`${baseUrl}/api/questions`, question).subscribe(res => {
            console.log(res)
        })
    }

    putQuestion(question){
        this.http.put(`${baseUrl}/api/questions/${question.questionId}`, question).subscribe(res => {
            console.log(res)
        })
    }
    putQuiz(quiz){
        this.http.put(`${baseUrl}/api/quizzes/${quiz.quizId}`, quiz).subscribe(res => {
            console.log(res)
        })
    }
    postQuiz(quiz){
        this.http.post(`${baseUrl}/api/quizzes`, quiz).subscribe(res => {
            console.log(res)
        })
    }
    postQuizAttempt(quizAttempt){
        this.http.post(`${baseUrl}/api/quizzes/${quizAttempt.quizId}`, quizAttempt).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question){
        this.selectedQuestion.next(question)
    }
    selectQuiz(quiz){
        this.selectedQuiz.next(quiz)
    }
}
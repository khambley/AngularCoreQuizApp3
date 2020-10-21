import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {

  question = {}
  questions
  questionNumber = 1
  
  
  constructor(public api: ApiService, public route: ActivatedRoute) {}

  ngOnInit(){
    var quizId = this.route.snapshot.paramMap.get('quizId')
    
    this.api.getQuestions(quizId).subscribe(res => {
      this.questions = res
    });
  }

  post(question) {
      this.api.postQuestion(question)
  }
}
import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import {PageEvent} from '@angular/material';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {

  constructor(public api: ApiService, public route: ActivatedRoute) {}
  question = {}
  questions
  pagedList = []
  length = 0
  pageSize = 3
  pageIndex = 0
  questionIndex = 1
  

  ngOnInit(){
    var quizId = this.route.snapshot.paramMap.get('quizId')
    
    this.api.getQuestions(quizId).subscribe(res => {
      this.questions = res
      this.pagedList = this.questions.slice(0, this.pageSize);
      this.length = this.questions.length;
    });
    
  }

  post(question) {
      this.api.postQuestion(question)
  }
  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    console.log("startIndex = " + startIndex)
    console.log("startIndex = " + startIndex)

    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.questions.slice(startIndex, endIndex);
    this.pageIndex = event.pageIndex
    this.questionIndex = startIndex + 1
    
    
  }
}
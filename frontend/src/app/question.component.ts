import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as CustomEditor from '../assets/ckeditor.js'

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  question = {}
  quizId
  //public Editor = ClassicEditor;
  public Editor = CustomEditor;
  
  constructor(public api: ApiService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId')
    //console.log(quizId)
    //this.quizId = this.route.snapshot.paramMap.get('quizId')
    this.api.questionSelected.subscribe(question => this.question = question)
  }

  post(question) {
      question.quizId = this.quizId
      this.api.postQuestion(question)
  }
}
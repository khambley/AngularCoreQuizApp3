import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {

  constructor(private api: ApiService) {}

  quiz = {}
  ngOnInit(){

  }

}
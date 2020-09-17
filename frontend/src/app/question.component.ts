import { Component } from '@angular/core'

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  question = ""
  post(question: any) {
    console.log(question)
  }
}
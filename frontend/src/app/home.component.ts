import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'

@Component({
  template: '<quiz></quiz><quizzes></quizzes>'
})
export class HomeComponent {
  title = 'My Quiz App';
}

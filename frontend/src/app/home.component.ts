import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'

@Component({
  template: '<question></question><questions></questions>'
})
export class HomeComponent {
  title = 'My Quiz App';
}

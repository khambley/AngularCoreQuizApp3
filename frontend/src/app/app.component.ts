import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'

@Component({
  selector: 'app-root',
  template: '<question></question>'
})
export class AppComponent {
  title = 'My Quiz App';
}

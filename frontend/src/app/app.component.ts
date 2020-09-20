import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'

@Component({
  selector: 'app-root',
  template: '<question></question><questions></questions>'
})
export class AppComponent {
  title = 'My Quiz App';
}

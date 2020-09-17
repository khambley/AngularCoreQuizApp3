import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-root',
  template: '<question></question>'
})
export class AppComponent {
  title = 'My Quiz App';
}

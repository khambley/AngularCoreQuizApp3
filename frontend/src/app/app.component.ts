import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Quiz App';
}

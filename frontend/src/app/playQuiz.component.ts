import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    quizId
    questions
 
  ngOnInit(){
    this.quizId = this.route.snapshot.paramMap.get('quizId')
    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res
    })
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FinishedComponent } from './finished.component'
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {PageEvent} from '@angular/material';


@Component({
  templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {

    constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) {}

    quizId
    questions
    //public Editor = ClassicEditor;

    pagedList = []
    length = 0
    pageSize = 1
    pageIndex = 0
    
 
  ngOnInit(){
    this.quizId = this.route.snapshot.paramMap.get('quizId')
    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res
      
        //first, create Answers list
        this.questions.forEach(q => {
            q.answers = [ q.correctAnswer, q.answer1, q.answer2, q.answer3 ]
            
            // Then, shuffle the answers array
            shuffle(q.answers)
        });
        this.pagedList = this.questions.slice(0, this.pageSize); 
        this.length = this.questions.length; 
    })
  }

  // for Submit button, tally the correct answers and score the quiz
  finish(){
      var correct = 0;
      this.questions.forEach(q => {
          if (q.correctAnswer == q.selectedAnswer)
            correct++
      });
      const dialogRef = this.dialog.open(FinishedComponent, {
        data: { correct, total: this.questions.length}
      });
      console.log(correct)
  }
  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.questions.slice(startIndex, endIndex);
    this.pageIndex = event.pageIndex
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
// Used ES6 version - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a){
    for (let i = a.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
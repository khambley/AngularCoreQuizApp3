import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
  MatInputModule, 
  MatCardModule, 
  MatListModule, 
  MatToolbarModule, 
  MatExpansionModule, 
  MatRadioModule, 
  MatDialogModule, 
  MatPaginatorModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'
import { fromEventPattern } from 'rxjs';
import { ApiService } from './api.service';
import { HomeComponent } from './home.component'
import { NavComponent } from './nav.component'
import { QuizComponent } from './quiz.component'
import { QuizzesComponent } from './quizzes.component'
import { RegisterComponent } from './register.component'
import { AuthService} from './auth.service'
import { AuthInterceptor } from './auth.interceptor'
import { LoginComponent } from './login.component'
import { PlayComponent } from './play.component'
import { PlayQuizComponent } from './playQuiz.component'
import { FinishedComponent } from './finished.component'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';




const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playQuiz/:quizId', component: PlayQuizComponent }
  //{ path: 'quizzes/:quizId', component: PlayQuizComponent }
]
  


@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent, HomeComponent, 
    NavComponent, QuizComponent, QuizzesComponent, RegisterComponent, 
    LoginComponent, PlayComponent, PlayQuizComponent, FinishedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule, 
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    CKEditorModule,
    MatPaginatorModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }

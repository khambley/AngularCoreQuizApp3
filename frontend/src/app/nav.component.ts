import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">My Quiz Maker App</button>
        <button mat-button routerLink="/">Home</button>
        <button mat-button routerLink="/play">Take Quiz</button>
        <span style="flex: 1 1 auto;"></span>
        <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
        <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Log In</button>
        <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Log Out</button>
    </mat-toolbar>
  `
})
export class NavComponent {
  constructor(public auth: AuthService){

  }
}
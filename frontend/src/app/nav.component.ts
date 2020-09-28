import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Quiz</button>
        <span style="flex: 1 1 auto;"></span>
        <button mat-button routerLink="/register">Register</button>
        <button mat-button routerLink="/login">Log In</button>
    </mat-toolbar>
  `
})
export class NavComponent {
}
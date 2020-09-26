import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private api: ApiService) {}

  ngOnInit(){
    
  }

}
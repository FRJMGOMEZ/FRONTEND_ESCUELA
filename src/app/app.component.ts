import { Component } from '@angular/core';
import { UserServices } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    
  constructor(private userService:UserServices){
      this.userService.getStarwarsCharacters().subscribe()
    }
}

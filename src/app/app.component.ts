import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-of-heroes';
  myHeroes = ["Bombasto", "Celeritas", "Magneta", "RubberMan"]
  heroes = ["Dr. Nice", "Dynama", "Dr IQ", "Aodap"]
}

import { Component, Input } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  [x: string]: any;
  constructor(private heroService: HeroService) {}

  heroes = this.heroService.heroes;
}

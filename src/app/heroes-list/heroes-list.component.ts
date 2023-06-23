import { Component, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { tap } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  heroes: Hero[] = [];
  heroSub: any;
  constructor(public heroService: HeroService) {}

  ngOnInit(): void {
    this.heroSub = this.heroService.heroesObs
      .pipe(tap((heroes: Hero[]) => (this.heroes = heroes)))
      .subscribe();
  }

  ngOnDestroy() {
    this.heroSub.unsubscribe();
  }
}

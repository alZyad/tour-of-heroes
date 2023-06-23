import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { tap } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  myHeroesSub: any;
  myHeroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.myHeroesSub = this.heroService.myHeroesObs
      .pipe(tap((myHeroes: Hero[]) => (this.myHeroes = myHeroes)))
      .subscribe();
  }

  ngOnDestroy() {
    this.myHeroesSub.unsubscribe();
  }
}

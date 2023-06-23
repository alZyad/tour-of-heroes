import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { map, tap } from 'rxjs';
import { Hero } from '../hero';

const INITIAL_NAME = 'My super hero name';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent {
  id: number = -1;
  private idSub: any;
  heroes: Hero[] = []; // TODO can this be avoided ?
  heroSub: any;

  constructor(
    private route: ActivatedRoute,
    public heroService: HeroService,
    private location: Location
  ) {}

  newName = '';

  back = () => {
    this.location.back();
  };

  ngOnInit(): void {
    this.heroSub = this.heroService.heroesObs
      .pipe(tap((heroes: Hero[]) => (this.heroes = heroes)))
      .subscribe();
    this.idSub = this.route.paramMap
      .pipe(
        map((paramsMap) => paramsMap.get('id')),
        map((paramId) => (paramId ? +paramId : -1)),
        tap((paramId) => (this.id = paramId)),
        tap((_) => {
          if (this.id < this.heroes.length) {
            this.newName = this.heroes[this.id].name;
          } else {
            this.heroService.addHero(INITIAL_NAME);
            this.newName = this.heroes[this.id].name;
          }
        })
      ) // TODO is this dangerous ?

      .subscribe();
  }

  ngOnDestroy() {
    this.heroSub.unsubscribe();
    this.idSub.unsubscribe();
  }
}

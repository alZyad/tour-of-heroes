import { Injectable } from '@angular/core';
import { HEROES, MY_HEROES } from './mock-heroes';
import { BehaviorSubject, tap } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroesObs = new BehaviorSubject(HEROES);

  myHeroesObs = new BehaviorSubject(MY_HEROES);

  updateHeroName = (id: number, newName: string) => {
    let heroes: Hero[] = [];
    let myHeroes: Hero[] = [];

    const heroSub = this.heroesObs
      .pipe(tap((heroesData: Hero[]) => (heroes = heroesData)))
      .subscribe();
    const newHeroes = heroes.map((oldHero: Hero, index: number) =>
      index === id ? { name: newName, id } : oldHero
    );
    this.heroesObs.next(newHeroes);

    const myHeroesSub = this.myHeroesObs
      .pipe(tap((myHeroesData: Hero[]) => (myHeroes = myHeroesData)))
      .subscribe();
    const myNewHeroes = myHeroes.map((oldHero: Hero) =>
      oldHero.id === id ? { name: newName, id } : oldHero
    );
    this.myHeroesObs.next(myNewHeroes);

    heroSub.unsubscribe();
    myHeroesSub.unsubscribe();
  };

  resetHeroes = () => {
    this.heroesObs.next(HEROES);
    this.myHeroesObs.next(MY_HEROES);
  };

  addHero = (name: string) => {
    this.heroesObs.next([...HEROES, { name, id: HEROES.length }]);
  };
}

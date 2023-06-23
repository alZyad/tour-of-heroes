import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  myHeroes = [
    { name: 'Bombasto', id: 5 },
    { name: 'Celeritas', id: 6 },
    { name: 'Magneta', id: 7 },
    { name: 'RubberMan', id: 8 },
  ];
  heroes = [
    'Dr. Nice',
    'Dynama',
    'Dr IQ',
    'Aodap',
    'Super Long Name Hero Man To Save The Day By Testing What It Looks Like To Have A Long Name', // TODO: add cesure
    'Bombasto',
    'Celeritas',
    'Magneta',
    'RubberMan',
    'Mr Hero N°10',
  ];

  updateHeroName = (id: number, event: any) => {
    this.heroes[id] = event.target.value;
  };
}

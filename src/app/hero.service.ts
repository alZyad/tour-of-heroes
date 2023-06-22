import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  myHeroes = ['Bombasto', 'Celeritas', 'Magneta', 'RubberMan'];
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
}

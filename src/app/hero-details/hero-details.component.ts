import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  providers: [HeroService],
})
export class HeroDetailsComponent {
  id: number = -1;
  private idSub: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  back = () => {
    this.location.back();
  };

  heroes = this.heroService.heroes;

  ngOnInit(): void {
    this.idSub = this.route.paramMap
      .pipe(
        map((paramsMap) => paramsMap.get('id')),
        map((paramId) => (paramId ? +paramId : -1)),
        tap((paramId) => (this.id = paramId))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}

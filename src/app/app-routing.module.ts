import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './hero.service';

const routes: Routes = [
  { path: 'heroes-list', component: HeroesListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero-details/:id', component: HeroDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeroService],
})
export class AppRoutingModule {}

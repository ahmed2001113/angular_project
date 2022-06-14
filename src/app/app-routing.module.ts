import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FooterComponent } from './footer/footer.component';
import { HealthComponent } from './health/health.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path: "navbar",component:NavbarComponent},
  {path: "footer",component:FooterComponent},
  {path: "sports",component:SportsComponent},
  {path: "health",component:HealthComponent},
  {path: "business",component:BusinessComponent},
  {path: "science",component:ScienceComponent},
  {path: "entertainment",component:EntertainmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

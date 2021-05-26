import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage1Component } from './landing-page1.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPage1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPage1RoutingModule { }

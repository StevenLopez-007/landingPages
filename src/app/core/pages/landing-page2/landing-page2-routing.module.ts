import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage2Component } from './landing-page2.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPage2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPage2RoutingModule { }

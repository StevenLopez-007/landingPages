import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage3Component } from './landing-page3.component';

const routes: Routes = [{
  path:'',
  component:LandingPage3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPage3RoutingModule { }

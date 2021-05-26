import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPage2RoutingModule } from './landing-page2-routing.module';
import { LandingPage2Component } from './landing-page2.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [LandingPage2Component],
  imports: [
    CommonModule,
    LandingPage2RoutingModule,
    MaterialModule
  ]
})
export class LandingPage2Module { }

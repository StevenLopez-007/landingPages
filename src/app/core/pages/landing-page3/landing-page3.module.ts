import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPage3RoutingModule } from './landing-page3-routing.module';
import { LandingPage3Component } from './landing-page3.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [LandingPage3Component],
  imports: [
    CommonModule,
    LandingPage3RoutingModule,
    MaterialModule
  ]
})
export class LandingPage3Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPage4RoutingModule } from './landing-page4-routing.module';
import { LandingPage4Component } from './landing-page4.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [LandingPage4Component],
  imports: [
    CommonModule,
    LandingPage4RoutingModule,
    MaterialModule
  ]
})
export class LandingPage4Module { }

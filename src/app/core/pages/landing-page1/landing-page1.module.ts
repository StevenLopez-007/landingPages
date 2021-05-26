import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPage1RoutingModule } from './landing-page1-routing.module';
import { LandingPage1Component } from './landing-page1.component';
import { MaterialModule } from '../../../material.module';
import { ScrollHideToolbarDirective } from '../../directives/scroll-hide-toolbar.directive';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [LandingPage1Component,ScrollHideToolbarDirective],
  imports: [
    CommonModule,
    LandingPage1RoutingModule,
    MaterialModule,
    ScrollToModule
  ]
})
export class LandingPage1Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { RouterModule } from '@angular/router';
import { LandingPagesComponent } from './landing-pages.component';


@NgModule({
  declarations: [LandingPagesComponent],
  imports: [
    CommonModule,
    LandingPagesRoutingModule,
    RouterModule
  ]
})
export class LandingPagesModule { }

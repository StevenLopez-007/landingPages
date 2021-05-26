import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollBarProgressComponent } from './scroll-bar-progress.component';



@NgModule({
  declarations: [ScrollBarProgressComponent],
  imports: [
    CommonModule
  ],
  exports:[ScrollBarProgressComponent]
})
export class ScrollBarProgressModule { }

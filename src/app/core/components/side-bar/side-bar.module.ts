import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[SideBarComponent]
})
export class SideBarModule { }

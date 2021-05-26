import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { SideBarService } from '../../../services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit,AfterViewInit {

  @ViewChild('sideBar',{read:ElementRef}) sideBar:ElementRef;
  constructor(private sideBarService:SideBarService, private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.sideBarService.getStatusSideBar().subscribe((status)=>{
      if(status){
        this.renderer.addClass(this.sideBar.nativeElement,'showSideBar');
        this.renderer.removeStyle(this.sideBar.nativeElement,'left');

      }else{
        this.renderer.removeClass(this.sideBar.nativeElement,'showSideBar');
        setTimeout(()=>{this.renderer.setStyle(this.sideBar.nativeElement,'left',-100+'%');},250)
      }
    })
  }

  close(ev:any){
    const overlay:HTMLElement = ev.target;
    if(overlay.classList.contains('sideBarOverlay') || overlay.classList.contains('closeIcon') ){
      this.sideBarService.toogleSideBar();
    }
  }



}

import { Component, OnDestroy, OnInit, ViewChildren, ElementRef, QueryList, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-pages',
  templateUrl: './landing-pages.component.html',
  styleUrls: ['./landing-pages.component.scss']
})
export class LandingPagesComponent implements OnInit, OnDestroy {

  divPrev:Event;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.scrollBody();

  }

  ngOnDestroy(){
    document.body.style.overflow = 'auto';
  }

  transitionstart(ev:Event){
    if(this.divPrev)this.renderer.setStyle(this.divPrev.target,'z-index','10');
    this.renderer.setStyle(ev.target,'z-index','1000');
    this.divPrev = ev;
  }

  @HostListener('window:resize')
  onResize(){
    this.scrollBody();
  }

  scrollBody(){
    if(window.innerHeight <=500){
      document.body.style.overflow = 'auto';
    }else{
      document.body.style.overflow = 'hidden';
    }
  }
}

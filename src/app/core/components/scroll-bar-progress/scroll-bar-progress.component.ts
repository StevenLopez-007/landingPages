import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'scroll-bar-progress',
  templateUrl: './scroll-bar-progress.component.html',
  styleUrls: ['./scroll-bar-progress.component.scss']
})
export class ScrollBarProgressComponent implements OnInit {

  @Input()color:string="#02c29b";
  @ViewChild('scrollProgressBar',{read:ElementRef}) scrollProgressBar:ElementRef;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  scrollProgress():void{
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height
    this.renderer.setStyle(this.scrollProgressBar.nativeElement,'width',`${scrolled*100}%`)

  }

}

import { Directive, ElementRef, HostBinding, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollHideToolbar]'
})
export class ScrollHideToolbarDirective implements AfterViewInit{

  height:number;

  lastScroll:number;
  scrollTop:number;

  scrollDownMax:number;
  scrollUpMax:number;

  inMiddle:boolean=false;

  observer:IntersectionObserver;
  constructor(private el:ElementRef,private renderer:Renderer2) {

  }

  ngAfterViewInit(){
    this.height = this.el.nativeElement.offsetHeight;
    this.observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(!entry.isIntersecting){
          this.inMiddle=false;
        }
      })
    })
    this.observer.observe(this.el.nativeElement);
  }

  @HostListener('window:scroll')
  scroll(){
    if(window.innerWidth<992){
      this.renderer.setStyle(this.el.nativeElement,'position','fixed');
      this.renderer.setStyle(this.el.nativeElement,'top','0px');
      return;
    }
    this.scrollTop = window.scrollY;
    if(this.scrollTop < this.lastScroll){
      if(this.scrollDownMax-this.height<this.scrollTop && !this.inMiddle){
        this.renderer.setStyle(this.el.nativeElement,'position','absolute');
        this.renderer.setStyle(this.el.nativeElement,'top',`${this.scrollDownMax-64}px`);
        this.inMiddle=true;
      }
      // this.scrollTop<=this.scrollDownMax-this.height
      if( this.scrollDownMax-this.height>this.scrollTop && this.inMiddle){
        this.renderer.setStyle(this.el.nativeElement,'position','fixed');
        this.renderer.setStyle(this.el.nativeElement,'top',`0px`);
        this.inMiddle=false;
      }
      this.scrollUpMax=this.scrollTop;
    }else{
      if(!this.inMiddle){
        this.renderer.setStyle(this.el.nativeElement,'position','absolute');
        this.renderer.setStyle(this.el.nativeElement,'top',`${this.scrollUpMax}px`);
      }
      this.scrollDownMax=this.scrollTop;
    }

    this.lastScroll = this.scrollTop;
  }
}

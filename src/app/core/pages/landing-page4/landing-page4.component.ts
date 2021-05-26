import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-markup';

declare var Prism:any;
@Component({
  selector: 'app-landing-page4',
  templateUrl: './landing-page4.component.html',
  styleUrls: ['./landing-page4.component.scss']
})
export class LandingPage4Component implements OnInit,AfterViewInit {

  @ViewChild('seccion1',{read:ElementRef}) seccion1:ElementRef;
  @ViewChild('cloud3',{read:ElementRef}) cloud3:ElementRef;
  @ViewChild('cloud2',{read:ElementRef}) cloud2:ElementRef;

  chipsSeccion4=['Email notification','File uploads',
  'Submissions archive', 'Administration panel','Spam blocker',
  'Privacy compliant','Custom success page','JavaScript submissions','Data storage in the E.U',
  'Export all submissions']
  code:string = `
  <form action="https://form.taxi/s/FORM_CODE" method="POST">
    <input type="text" name="Name">
    <input type="email" name="Email">
    <textarea name="Message"></textarea>
    <input type="submit" value="Submit">
  </form>
  `;
  heightSeccion1:number;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    this.code = Prism.highlight(this.code,Prism.languages['markup']);
  }
  ngAfterViewInit():void{
    this.heightSeccion1 = this.seccion1.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll')
  scrollWindow(){
    const scrollTop = window.scrollY;

    let position = ((scrollTop/this.heightSeccion1)*100)
    this.renderer.setStyle(this.cloud3.nativeElement,'bottom',`-${position>50?50:position}px`);
    this.renderer.setStyle(this.cloud2.nativeElement,'bottom',`-${position>50?50:position/2}px`)
  }

  hola(){
    console.log('hol')
  }

}

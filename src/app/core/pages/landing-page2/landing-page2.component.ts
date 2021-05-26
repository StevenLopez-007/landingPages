import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing-page2',
  templateUrl: './landing-page2.component.html',
  styleUrls: ['./landing-page2.component.scss']
})
export class LandingPage2Component implements OnInit,AfterViewInit {

  contentSeccion2Cards=[
    {
      title:'EASY TO CUSTOMIZE',
      img:'../../../../assets/landingPage2/seccion2/img1.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    },
    {
      title:'EXTREME SECURITY',
      img:'../../../../assets/landingPage2/seccion2/img2.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    },
    {
      title:'QUICK SUPPORT',
      img:'../../../../assets/landingPage2/seccion2/img3.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    }
  ];

  contentSeccion3Cards=[
    {
      title:'CREATIVE BUSINESS IDEA',
      img:'../../../../assets/landingPage2/seccion3/img1.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    },
    {
      title:'BUSINESS IMPLEMENTATION',
      img:'../../../../assets/landingPage2/seccion3/img1.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    },
    {
      title:'TRAINING TO EMPLOYEE',
      img:'../../../../assets/landingPage2/seccion3/img1.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    },
    {
      title:'BEST TEAMWORK EVER',
      img:'../../../../assets/landingPage2/seccion3/img1.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    },
    {
      title:'BEST STRETEGY',
      img:'../../../../assets/landingPage2/seccion3/img1.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    },
    {
      title:'BUSINESS PRIVACY',
      img:'../../../../assets/landingPage2/seccion3/img1.svg',
      content:'Occaecat excepteur duis et minim adipisicing ad occaecat sunt quis deserunt ipsum sunt ipsum fugiat. Irure.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout(()=>{document.getElementById('imgFade').classList.add('fade')},1000)
  }

}

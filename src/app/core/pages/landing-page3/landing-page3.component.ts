import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page3',
  templateUrl: './landing-page3.component.html',
  styleUrls: ['./landing-page3.component.scss']
})
export class LandingPage3Component implements OnInit {
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

}

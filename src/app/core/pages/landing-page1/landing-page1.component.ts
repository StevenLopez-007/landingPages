import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SideBarService } from '../../../services/side-bar.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper/core';


import AOS from 'aos';
// install Swiper modules
SwiperCore.use([Navigation, Pagination,Autoplay]);
@Component({
  selector: 'app-landing-page1',
  templateUrl: './landing-page1.component.html',
  styleUrls: ['./landing-page1.component.scss']
})
export class LandingPage1Component implements OnInit {
  @ViewChild('scrollProgressBar',{read:ElementRef}) scrollProgressBar:ElementRef;
  totalHeight:number;


  contentSeccion2 = {
    content1: [
      {
        title: 'Invest in ELSS',
        content: 'These are tax-saving mutual funds that you can use to save income tax of up to $100.50 under Section 80C.'
      },
    {
      title:'Lowest lock-in of 3 years',
      content:'ELSS offer the lowest lock in period among other tax saving options.'
    },
    {
      title:'Higher interest rate',
      content:'ELSS give 2x higher interest rates (14-16%) than FD/PPF (7-8%).'
    }],

    content2:[
      {
        title:'When is tax appliacble',
        content:'Return are taxable @10% if gains are greater than $1 lakh in the ELSS mutual funds.'
      },
      {
        title:'Begin from $1000',
        content:'Invest as low as Rs 1000 per month to no maximum investment limit.'
      },
      {
        title:'Other benefits',
        content:'Will give inflation-beating returns. \n Best option for long-term wealth'
      }
    ]
  };


  contentSeccion4=[
    {
      title:'Flexibie and easy to monitor',
      img:'../../../../assets/landingPage1/seccion4/img1.svg',
      content:'Flexibility in switching, monitoring funds and in terms of ternure.'
    },
    {
      title:'Low coast and secure option',
      img:'../../../../assets/landingPage1/seccion4/img2.svg',
      content:'Mutual funds are affordable, safe and secure to invest in.'
    },
    {
      title:'Low coast and secure option',
      img:'../../../../assets/landingPage1/seccion4/img1.svg',
      content:'Mutual funds are affordable, safe and secure to invest in.'
    },
    {
      title:'Flexibie and easy to monitor',
      img:'../../../../assets/landingPage1/seccion4/img2.svg',
      content:'Flexibility in switching, monitoring funds and in terms of ternure.'
    },

  ]

  contentSeccion5=[
    {
      title:'Direct Purchase',
      img:'../../../../assets/landingPage1/seccion5/img1.svg',
      content:'Commodo excepteur velit aliquip excepteur quis ad ad voluptate enim laborum fugiat. Duis aute duis aute nulla fugiat ex qui eu veniam. Nulla mollit sunt.'
    },
    {
      title:'Agents',
      img:'../../../../assets/landingPage1/seccion5/img2.svg',
      content:'They are sales professionals who reach out to potential customer and inform them on the different fund options. They charge commissions for their services.'
    },
    {
      title:'Online',
      img:'../../../../assets/landingPage1/seccion5/img3.svg',
      content:'Buying/selling a mutual funds online not only saves time and effort but also makes it easy to compare funds and make informed decisions, ClearTax is one such portal.'
    }
  ]
  constructor(private sideBarService:SideBarService) { }

  ngOnInit(): void {
    AOS.init();
  }

  get breakPoint(){
    return window.innerWidth;
  }

  showSideBar(){
    this.sideBarService.toogleSideBar();
  }

}

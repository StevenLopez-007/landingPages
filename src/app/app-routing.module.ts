import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('../app/core/pages/landing-pages/landing-pages.module').then(m=>m.LandingPagesModule),
    data:{
      title:'Landing Pages'
    }
  },
  {
    path:'lp',
    loadChildren:()=>import('../app/core/pages/landing-page1/landing-page1.module').then(m=>m.LandingPage1Module),
    data:{
      title:'Landing Page 1'
    }
  },
  {
    path:'lp2',
    loadChildren:()=>import('../app/core/pages/landing-page2/landing-page2.module').then(m=>m.LandingPage2Module),
    data:{
      title:'Landing Page 2'
    }
  },
  {
    path:'lp3',
    loadChildren:()=>import('../app/core/pages/landing-page3/landing-page3.module').then(m=>m.LandingPage3Module),
    data:{
      title:'Landing Page 3'
    }
  },
  {
    path:'lp4',
    loadChildren:()=>import('../app/core/pages/landing-page4/landing-page4.module').then(m=>m.LandingPage4Module),
    data:{
      title:'Landing Page 4'
    }
  },

  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

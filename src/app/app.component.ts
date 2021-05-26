import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {filter,map} from 'rxjs/operators';
import AOS from 'aos';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor (public router: Router, private activatedRoute:ActivatedRoute, private titleService: Title) {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                } else if (child.snapshot.data &&    child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                } else {
                    return null;
                }
            }
            return null;
        })
    ).subscribe( (data: any) => {
        if (data) {
            this.titleService.setTitle(data);
        }
    });
}

  ngOnInit(){
    AOS.init({
      once:true
    });
  }

}

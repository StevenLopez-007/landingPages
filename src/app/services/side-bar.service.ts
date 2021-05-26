import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  showSideBar$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  getStatusSideBar(){
    return this.showSideBar$.asObservable();
  }

  toogleSideBar(){
    this.showSideBar$.next(!this.isOpenBar())
  }

  isOpenBar(){
    return this.showSideBar$.value;
  }
}

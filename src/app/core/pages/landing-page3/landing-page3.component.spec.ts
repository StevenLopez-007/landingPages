import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage3Component } from './landing-page3.component';

describe('LandingPage3Component', () => {
  let component: LandingPage3Component;
  let fixture: ComponentFixture<LandingPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

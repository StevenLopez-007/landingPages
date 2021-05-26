import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBarProgressComponent } from './scroll-bar-progress.component';

describe('ScrollBarProgressComponent', () => {
  let component: ScrollBarProgressComponent;
  let fixture: ComponentFixture<ScrollBarProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollBarProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBarProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrizesComponent } from './view-prizes.component';

describe('ViewPrizesComponent', () => {
  let component: ViewPrizesComponent;
  let fixture: ComponentFixture<ViewPrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

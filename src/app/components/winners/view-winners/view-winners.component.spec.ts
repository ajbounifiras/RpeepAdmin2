import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWinnersComponent } from './view-winners.component';

describe('ViewWinnersComponent', () => {
  let component: ViewWinnersComponent;
  let fixture: ComponentFixture<ViewWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

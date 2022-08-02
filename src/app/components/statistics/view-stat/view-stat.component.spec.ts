import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStatComponent } from './view-stat.component';

describe('ViewStatComponent', () => {
  let component: ViewStatComponent;
  let fixture: ComponentFixture<ViewStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

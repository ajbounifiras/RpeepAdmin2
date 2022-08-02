import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsliderComponent } from './viewslider.component';

describe('ViewsliderComponent', () => {
  let component: ViewsliderComponent;
  let fixture: ComponentFixture<ViewsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

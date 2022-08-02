import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsliderComponent } from './editslider.component';

describe('EditsliderComponent', () => {
  let component: EditsliderComponent;
  let fixture: ComponentFixture<EditsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

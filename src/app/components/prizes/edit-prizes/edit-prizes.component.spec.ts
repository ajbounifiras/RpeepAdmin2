import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrizesComponent } from './edit-prizes.component';

describe('EditPrizesComponent', () => {
  let component: EditPrizesComponent;
  let fixture: ComponentFixture<EditPrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

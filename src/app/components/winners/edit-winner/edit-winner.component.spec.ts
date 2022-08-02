import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWinnerComponent } from './edit-winner.component';

describe('EditWinnerComponent', () => {
  let component: EditWinnerComponent;
  let fixture: ComponentFixture<EditWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

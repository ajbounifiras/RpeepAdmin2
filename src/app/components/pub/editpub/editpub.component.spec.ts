import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpubComponent } from './editpub.component';

describe('EditpubComponent', () => {
  let component: EditpubComponent;
  let fixture: ComponentFixture<EditpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

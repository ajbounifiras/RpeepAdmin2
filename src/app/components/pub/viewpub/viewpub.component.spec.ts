import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpubComponent } from './viewpub.component';

describe('ViewpubComponent', () => {
  let component: ViewpubComponent;
  let fixture: ComponentFixture<ViewpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

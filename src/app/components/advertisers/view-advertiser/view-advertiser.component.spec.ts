import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdvertiserComponent } from './view-advertiser.component';

describe('ViewAdvertiserComponent', () => {
  let component: ViewAdvertiserComponent;
  let fixture: ComponentFixture<ViewAdvertiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdvertiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

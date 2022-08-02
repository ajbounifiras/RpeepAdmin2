import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReclamationsComponent } from './view-reclamations.component';

describe('ViewReclamationsComponent', () => {
  let component: ViewReclamationsComponent;
  let fixture: ComponentFixture<ViewReclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReclamationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

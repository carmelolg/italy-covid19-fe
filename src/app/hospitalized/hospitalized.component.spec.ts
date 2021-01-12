import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizedComponent } from './hospitalized.component';

describe('HospitalizedComponent', () => {
  let component: HospitalizedComponent;
  let fixture: ComponentFixture<HospitalizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

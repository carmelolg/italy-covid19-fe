import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionHospitalizedComponent } from './region-hospitalized.component';

describe('RegionHospitalizedComponent', () => {
  let component: RegionHospitalizedComponent;
  let fixture: ComponentFixture<RegionHospitalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionHospitalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionHospitalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

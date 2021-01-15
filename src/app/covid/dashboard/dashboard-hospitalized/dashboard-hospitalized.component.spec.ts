import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardHospitalizedComponent} from './dashboard-hospitalized.component';

describe('DashboardHospitalizedComponent', () => {
  let component: DashboardHospitalizedComponent;
  let fixture: ComponentFixture<DashboardHospitalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHospitalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHospitalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

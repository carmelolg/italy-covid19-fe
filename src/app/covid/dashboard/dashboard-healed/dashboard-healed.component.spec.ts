import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardHealedComponent} from './dashboard-healed.component';

describe('DashboardHealedComponent', () => {
  let component: DashboardHealedComponent;
  let fixture: ComponentFixture<DashboardHealedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHealedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHealedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

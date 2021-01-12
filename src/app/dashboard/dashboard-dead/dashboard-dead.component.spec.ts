import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDeadComponent } from './dashboard-dead.component';

describe('DashboardDeadComponent', () => {
  let component: DashboardDeadComponent;
  let fixture: ComponentFixture<DashboardDeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

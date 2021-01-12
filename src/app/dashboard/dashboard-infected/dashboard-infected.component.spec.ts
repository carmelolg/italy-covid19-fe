import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfectedComponent } from './dashboard-infected.component';

describe('DashboardInfectedComponent', () => {
  let component: DashboardInfectedComponent;
  let fixture: ComponentFixture<DashboardInfectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInfectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInfectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

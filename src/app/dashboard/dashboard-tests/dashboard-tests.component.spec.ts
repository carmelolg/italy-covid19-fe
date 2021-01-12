import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTestsComponent } from './dashboard-tests.component';

describe('DashboardTestsComponent', () => {
  let component: DashboardTestsComponent;
  let fixture: ComponentFixture<DashboardTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictInfectedComponent } from './district-infected.component';

describe('DistrictInfectedComponent', () => {
  let component: DistrictInfectedComponent;
  let fixture: ComponentFixture<DistrictInfectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictInfectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictInfectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionInfectedComponent } from './region-infected.component';

describe('RegionInfectedComponent', () => {
  let component: RegionInfectedComponent;
  let fixture: ComponentFixture<RegionInfectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionInfectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionInfectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

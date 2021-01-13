import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTestsComponent } from './region-tests.component';

describe('RegionTestsComponent', () => {
  let component: RegionTestsComponent;
  let fixture: ComponentFixture<RegionTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionHealedComponent } from './region-healed.component';

describe('RegionHealedComponent', () => {
  let component: RegionHealedComponent;
  let fixture: ComponentFixture<RegionHealedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionHealedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionHealedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

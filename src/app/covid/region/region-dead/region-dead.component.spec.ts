import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDeadComponent } from './region-dead.component';

describe('RegionDeadComponent', () => {
  let component: RegionDeadComponent;
  let fixture: ComponentFixture<RegionDeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionDeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

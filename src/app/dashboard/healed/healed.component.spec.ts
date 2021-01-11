import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealedComponent } from './healed.component';

describe('HealedComponent', () => {
  let component: HealedComponent;
  let fixture: ComponentFixture<HealedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectedComponent } from './infected.component';

describe('InfectedComponent', () => {
  let component: InfectedComponent;
  let fixture: ComponentFixture<InfectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

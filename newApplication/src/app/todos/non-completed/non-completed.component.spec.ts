import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCompletedComponent } from './non-completed.component';

describe('NonCompletedComponent', () => {
  let component: NonCompletedComponent;
  let fixture: ComponentFixture<NonCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

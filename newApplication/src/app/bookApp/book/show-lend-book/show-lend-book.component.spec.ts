import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLendBookComponent } from './show-lend-book.component';

describe('ShowLendBookComponent', () => {
  let component: ShowLendBookComponent;
  let fixture: ComponentFixture<ShowLendBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLendBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLendBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookActionComponent } from './book-action.component';

describe('BookActionComponent', () => {
  let component: BookActionComponent;
  let fixture: ComponentFixture<BookActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarritoComponent } from './new-carrito.component';

describe('NewCarritoComponent', () => {
  let component: NewCarritoComponent;
  let fixture: ComponentFixture<NewCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

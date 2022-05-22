import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarritoComponent } from './edit-carrito.component';

describe('EditCarritoComponent', () => {
  let component: EditCarritoComponent;
  let fixture: ComponentFixture<EditCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

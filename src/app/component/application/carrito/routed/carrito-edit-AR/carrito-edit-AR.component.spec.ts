import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoEditARComponent } from './carrito-edit-AR.component';

describe('CarritoEditARComponent', () => {
  let component: CarritoEditARComponent;
  let fixture: ComponentFixture<CarritoEditARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoEditARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoEditARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

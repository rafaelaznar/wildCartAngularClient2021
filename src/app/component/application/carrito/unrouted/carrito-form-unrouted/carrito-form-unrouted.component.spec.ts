import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoFormUnroutedComponent } from './carrito-form-unrouted.component';

describe('CarritoFormUnroutedComponent', () => {
  let component: CarritoFormUnroutedComponent;
  let fixture: ComponentFixture<CarritoFormUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoFormUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoEditRoutedComponent } from './carrito-edit-routed.component';

describe('CarritoEditRoutedComponent', () => {
  let component: CarritoEditRoutedComponent;
  let fixture: ComponentFixture<CarritoEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoEditRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

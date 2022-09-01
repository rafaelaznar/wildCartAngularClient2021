import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoRemoveRoutedComponent } from './carrito-remove-routed.component';

describe('CarritoRemoveRoutedComponent', () => {
  let component: CarritoRemoveRoutedComponent;
  let fixture: ComponentFixture<CarritoRemoveRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoRemoveRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoRemoveRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoRemoveAdminRoutedComponent } from './carrito-remove-ar.component';

describe('CarritoRemoveAdminRoutedComponent', () => {
  let component: CarritoRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<CarritoRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

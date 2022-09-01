import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoNewRoutedComponent } from './carrito-new-routed.component';

describe('CarritoNewRoutedComponent', () => {
  let component: CarritoNewRoutedComponent;
  let fixture: ComponentFixture<CarritoNewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoNewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

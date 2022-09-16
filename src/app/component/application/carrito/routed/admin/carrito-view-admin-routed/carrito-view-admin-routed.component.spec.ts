import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoViewAdminRoutedComponent } from './carrito-view-admin-routed.component';

describe('CarritoViewAdminRoutedComponent', () => {
  let component: CarritoViewAdminRoutedComponent;
  let fixture: ComponentFixture<CarritoViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoViewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

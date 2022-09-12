import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoEditAdminRoutedComponent } from './carrito-edit-ar.component';

describe('CarritoEditAdminRoutedComponent', () => {
  let component: CarritoEditAdminRoutedComponent;
  let fixture: ComponentFixture<CarritoEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoEditAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

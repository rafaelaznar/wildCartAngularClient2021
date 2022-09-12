import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPlistAdminRoutedComponent } from './carrito-plist-ar.component';

describe('PlistCarritoComponent', () => {
  let component: CarritoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<CarritoPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPlistUserRoutedComponent } from './carrito-plist-user-routed.component';

describe('PlistCarritoComponent', () => {
  let component: CarritoPlistUserRoutedComponent;
  let fixture: ComponentFixture<CarritoPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistUserRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

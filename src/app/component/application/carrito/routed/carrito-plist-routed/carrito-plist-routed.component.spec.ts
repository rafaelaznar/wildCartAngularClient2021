import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPlistRoutedComponent } from './carrito-plist-routed.component';

describe('PlistCarritoComponent', () => {
  let component: CarritoPlistRoutedComponent;
  let fixture: ComponentFixture<CarritoPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

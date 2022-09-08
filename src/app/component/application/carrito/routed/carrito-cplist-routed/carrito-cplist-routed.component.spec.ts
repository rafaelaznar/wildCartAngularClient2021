import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoCPlistRoutedComponent } from './carrito-cplist-routed.component';

describe('PlistCarritoComponent', () => {
  let component: CarritoCPlistRoutedComponent;
  let fixture: ComponentFixture<CarritoCPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoCPlistRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoCPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

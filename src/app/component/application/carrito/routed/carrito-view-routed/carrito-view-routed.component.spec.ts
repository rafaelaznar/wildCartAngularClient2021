import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoViewRoutedComponent } from './carrito-view-routed.component';

describe('CarritoViewRoutedComponent', () => {
  let component: CarritoViewRoutedComponent;
  let fixture: ComponentFixture<CarritoViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

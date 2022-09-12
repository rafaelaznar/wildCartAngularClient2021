import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoNewAdminRoutedComponent } from './carrito-new-ar.component';

describe('CarritoNewAdminRoutedComponent', () => {
  let component: CarritoNewAdminRoutedComponent;
  let fixture: ComponentFixture<CarritoNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoNewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

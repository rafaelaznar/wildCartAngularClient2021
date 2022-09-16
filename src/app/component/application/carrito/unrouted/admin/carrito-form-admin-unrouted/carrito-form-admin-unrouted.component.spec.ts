import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoFormAdminUnroutedComponent } from './carrito-form-admin-unrouted.component';

describe('CarritoFormAdminUnroutedComponent', () => {
  let component: CarritoFormAdminUnroutedComponent;
  let fixture: ComponentFixture<CarritoFormAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoFormAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoFormAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

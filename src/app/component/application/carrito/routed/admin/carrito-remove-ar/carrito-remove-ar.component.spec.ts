import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoRemoveARComponent } from './carrito-remove-ar.component';

describe('CarritoRemoveARComponent', () => {
  let component: CarritoRemoveARComponent;
  let fixture: ComponentFixture<CarritoRemoveARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoRemoveARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoRemoveARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

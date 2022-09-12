import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoViewARComponent } from './carrito-view-ar.component';

describe('CarritoViewARComponent', () => {
  let component: CarritoViewARComponent;
  let fixture: ComponentFixture<CarritoViewARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoViewARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoViewARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

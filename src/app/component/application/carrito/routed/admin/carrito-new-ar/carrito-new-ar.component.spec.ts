import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoNewARComponent } from './carrito-new-ar.component';

describe('CarritoNewARComponent', () => {
  let component: CarritoNewARComponent;
  let fixture: ComponentFixture<CarritoNewARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoNewARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoNewARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoFormAUComponent } from './carrito-form-au.component';

describe('CarritoFormAUComponent', () => {
  let component: CarritoFormAUComponent;
  let fixture: ComponentFixture<CarritoFormAUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoFormAUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoFormAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

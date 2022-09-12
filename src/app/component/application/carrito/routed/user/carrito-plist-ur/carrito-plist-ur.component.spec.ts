import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPlistURComponent } from './carrito-plist-ur.component';

describe('PlistCarritoComponent', () => {
  let component: CarritoPlistURComponent;
  let fixture: ComponentFixture<CarritoPlistURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistURComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

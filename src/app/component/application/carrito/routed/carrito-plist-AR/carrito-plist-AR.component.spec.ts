import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPlistARComponent } from './carrito-plist-AR.component';

describe('PlistCarritoComponent', () => {
  let component: CarritoPlistARComponent;
  let fixture: ComponentFixture<CarritoPlistARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

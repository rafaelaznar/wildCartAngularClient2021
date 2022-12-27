import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPlistUserRoutedComponent } from './factura-plist-user-routed.component';

describe('PlistCarritoComponent', () => {
  let component: FacturaPlistUserRoutedComponent;
  let fixture: ComponentFixture<FacturaPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPlistUserRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

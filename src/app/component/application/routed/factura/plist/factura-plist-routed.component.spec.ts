import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPlistRoutedComponent } from './factura-plist-routed.component';

describe('PlistFacturaComponent', () => {
  let component: FacturaPlistRoutedComponent;
  let fixture: ComponentFixture<FacturaPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPlistRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

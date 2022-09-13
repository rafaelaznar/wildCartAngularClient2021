import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPlistAdminRoutedComponent } from './factura-plist-ar.component';

describe('PlistFacturaComponent', () => {
  let component: FacturaPlistAdminRoutedComponent;
  let fixture: ComponentFixture<FacturaPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPlistAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

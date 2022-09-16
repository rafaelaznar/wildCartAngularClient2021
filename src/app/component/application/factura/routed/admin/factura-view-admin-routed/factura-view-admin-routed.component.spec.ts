import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaViewAdminRoutedComponent } from './factura-view-admin-routed.component';

describe('FacturaViewAdminRoutedComponent', () => {
  let component: FacturaViewAdminRoutedComponent;
  let fixture: ComponentFixture<FacturaViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaViewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaRemoveAdminRoutedComponent } from './factura-remove-ar.component';

describe('FacturaRemoveAdminRoutedComponent', () => {
  let component: FacturaRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<FacturaRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaRemoveRoutedComponent } from './factura-remove-routed.component';

describe('FacturaRemoveRoutedComponent', () => {
  let component: FacturaRemoveRoutedComponent;
  let fixture: ComponentFixture<FacturaRemoveRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaRemoveRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaRemoveRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

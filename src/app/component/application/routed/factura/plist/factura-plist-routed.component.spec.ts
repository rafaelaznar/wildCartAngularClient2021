import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistFacturaRoutedComponent } from './factura-plist-routed.component';

describe('PlistFacturaComponent', () => {
  let component: PlistFacturaRoutedComponent;
  let fixture: ComponentFixture<PlistFacturaRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistFacturaRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistFacturaRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

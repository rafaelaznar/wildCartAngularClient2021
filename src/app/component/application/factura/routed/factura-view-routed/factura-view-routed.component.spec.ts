import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaViewRoutedComponent } from './factura-view-routed.component';

describe('FacturaViewRoutedComponent', () => {
  let component: FacturaViewRoutedComponent;
  let fixture: ComponentFixture<FacturaViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

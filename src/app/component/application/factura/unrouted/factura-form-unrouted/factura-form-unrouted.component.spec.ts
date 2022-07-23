import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaFormUnroutedComponent } from './factura-form-unrouted.component';

describe('FacturaFormUnroutedComponent', () => {
  let component: FacturaFormUnroutedComponent;
  let fixture: ComponentFixture<FacturaFormUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaFormUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaFormAdminUnroutedComponent } from './factura-form-admin-unrouted.component';

describe('FacturaFormAdminUnroutedComponent', () => {
  let component: FacturaFormAdminUnroutedComponent;
  let fixture: ComponentFixture<FacturaFormAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaFormAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaFormAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

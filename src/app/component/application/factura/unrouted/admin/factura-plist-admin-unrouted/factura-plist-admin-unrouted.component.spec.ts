import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPlistAdminUnroutedComponent } from './factura-plist-admin-unrouted.component';

describe('FacturaPlistAdminUnroutedComponent', () => {
  let component: FacturaPlistAdminUnroutedComponent;
  let fixture: ComponentFixture<FacturaPlistAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPlistAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

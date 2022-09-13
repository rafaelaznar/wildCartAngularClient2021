/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacturaPlistheaderAdminUnroutedComponent } from './factura-plistheader-au.component';

describe('ProductoPlistheaderUnroutedComponent', () => {
  let component: FacturaPlistheaderAdminUnroutedComponent;
  let fixture: ComponentFixture<FacturaPlistheaderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaPlistheaderAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistheaderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

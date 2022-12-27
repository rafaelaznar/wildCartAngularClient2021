/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacturaPlistrowUserUnroutedComponent } from './factura-plistrow-user-unrouted.component';

describe('ProductoRowUnroutedComponent', () => {
  let component: FacturaPlistrowUserUnroutedComponent;
  let fixture: ComponentFixture<FacturaPlistrowUserUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaPlistrowUserUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistrowUserUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

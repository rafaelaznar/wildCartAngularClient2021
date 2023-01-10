/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductoPlistheaderAdminUnroutedComponent } from './producto-plistheader-admin-unrouted.component';

describe('ProductoPlistheaderAdminUnroutedComponent', () => {
  let component: ProductoPlistheaderAdminUnroutedComponent;
  let fixture: ComponentFixture<ProductoPlistheaderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoPlistheaderAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPlistheaderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

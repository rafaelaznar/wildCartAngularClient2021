/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompraPlistheaderAdminUnroutedComponent } from './compra-plistheader-admin-unrouted.component';

describe('ProductoPlistheaderAdminUnroutedComponent', () => {
  let component: CompraPlistheaderAdminUnroutedComponent;
  let fixture: ComponentFixture<CompraPlistheaderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompraPlistheaderAdminUnroutedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistheaderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

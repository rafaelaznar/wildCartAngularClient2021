/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompraPlistHeaderAdminUnroutedComponent } from './compra-plistheader-au.component';

describe('ProductoPlistheaderUnroutedComponent', () => {
  let component: CompraPlistHeaderAdminUnroutedComponent;
  let fixture: ComponentFixture<CompraPlistHeaderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompraPlistHeaderAdminUnroutedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistHeaderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

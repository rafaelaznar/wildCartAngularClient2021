/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompraPlistheaderUnroutedComponent } from './compra-plistheader-unrouted.component';

describe('ProductoPlistheaderUnroutedComponent', () => {
  let component: CompraPlistheaderUnroutedComponent;
  let fixture: ComponentFixture<CompraPlistheaderUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompraPlistheaderUnroutedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistheaderUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompraPlistRowUnroutedComponent } from './compra-plistrow-au.component';

describe('FacturaRowUnroutedComponent', () => {
  let component: CompraPlistRowUnroutedComponent;
  let fixture: ComponentFixture<CompraPlistRowUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompraPlistRowUnroutedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistRowUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompraPlistrowUnroutedComponent } from './compra-plistrow-au.component';

describe('FacturaRowUnroutedComponent', () => {
  let component: CompraPlistrowUnroutedComponent;
  let fixture: ComponentFixture<CompraPlistrowUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompraPlistrowUnroutedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistrowUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

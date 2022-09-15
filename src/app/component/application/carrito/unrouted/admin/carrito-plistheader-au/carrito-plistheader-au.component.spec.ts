/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritoPlistheaderAdminUnroutedComponent } from './carrito-plistheader-au.component';

describe('CarritoPlistheaderAdminUnroutedComponent', () => {
  let component: CarritoPlistheaderAdminUnroutedComponent;
  let fixture: ComponentFixture<CarritoPlistheaderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoPlistheaderAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistheaderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

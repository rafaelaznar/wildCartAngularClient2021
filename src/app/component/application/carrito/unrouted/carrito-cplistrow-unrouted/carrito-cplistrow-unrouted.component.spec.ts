/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritoCPlistRowUnroutedComponent } from './carrito-cplistrow-unrouted.component';

describe('ProductoRowUnroutedComponent', () => {
  let component: CarritoCPlistRowUnroutedComponent;
  let fixture: ComponentFixture<CarritoCPlistRowUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoCPlistRowUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoCPlistRowUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

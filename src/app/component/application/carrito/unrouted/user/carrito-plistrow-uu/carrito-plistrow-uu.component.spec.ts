/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritoPlistrowUserUnroutedComponent } from './carrito-plistrow-uu.component';

describe('ProductoRowUnroutedComponent', () => {
  let component: CarritoPlistrowUserUnroutedComponent;
  let fixture: ComponentFixture<CarritoPlistrowUserUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoPlistrowUserUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistrowUserUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

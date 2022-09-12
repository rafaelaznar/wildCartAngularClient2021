/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritoPlistRowUUComponent } from './carrito-plistrow-uu.component';

describe('ProductoRowUnroutedComponent', () => {
  let component: CarritoPlistRowUUComponent;
  let fixture: ComponentFixture<CarritoPlistRowUUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoPlistRowUUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistRowUUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

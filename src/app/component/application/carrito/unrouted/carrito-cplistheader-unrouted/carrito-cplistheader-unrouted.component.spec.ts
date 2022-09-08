/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritoCPlistheaderUnroutedComponent } from './carrito-cplistheader-unrouted.component';

describe('CarritoPlistheaderUnroutedComponent', () => {
  let component: CarritoCPlistheaderUnroutedComponent;
  let fixture: ComponentFixture<CarritoCPlistheaderUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoCPlistheaderUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoCPlistheaderUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

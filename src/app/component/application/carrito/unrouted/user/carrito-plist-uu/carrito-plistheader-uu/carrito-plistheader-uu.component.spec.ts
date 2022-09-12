/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritoPlistHeaderUserUnroutedComponent } from './carrito-plistheader-uu.component';

describe('CarritoPlistHeaderAdminUnroutedComponent', () => {
  let component: CarritoPlistHeaderUserUnroutedComponent;
  let fixture: ComponentFixture<CarritoPlistHeaderUserUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoPlistHeaderUserUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistHeaderUserUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

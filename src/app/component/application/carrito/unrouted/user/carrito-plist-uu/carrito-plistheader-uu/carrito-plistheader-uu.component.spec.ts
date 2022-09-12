/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritoPlistHeaderUUComponent } from './carrito-plistheader-uu.component';

describe('CarritoPlistHeaderAUComponent', () => {
  let component: CarritoPlistHeaderUUComponent;
  let fixture: ComponentFixture<CarritoPlistHeaderUUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoPlistHeaderUUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistHeaderUUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

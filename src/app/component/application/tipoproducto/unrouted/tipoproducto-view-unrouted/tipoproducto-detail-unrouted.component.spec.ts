/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipoproductoDetailUnroutedComponent } from './tipoproducto-detail-unrouted.component';

describe('TipoproductoDetailUnroutedComponent', () => {
  let component: TipoproductoDetailUnroutedComponent;
  let fixture: ComponentFixture<TipoproductoDetailUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoproductoDetailUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

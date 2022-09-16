/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipousuarioPlistrowAdminUnroutedComponent } from './tiposusario-plistrow-unrouted.component';

describe('ProductoRowUnroutedComponent', () => {
  let component: TipousuarioPlistrowAdminUnroutedComponent;
  let fixture: ComponentFixture<TipousuarioPlistrowAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioPlistrowAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioPlistrowAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipousuarioPlistheaderAdminUnroutedComponent } from './tipousuario-plistheader-au.component';

describe('UsuarioPlistheaderAdminUnroutedComponent', () => {
  let component: TipousuarioPlistheaderAdminUnroutedComponent;
  let fixture: ComponentFixture<TipousuarioPlistheaderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioPlistheaderAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioPlistheaderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

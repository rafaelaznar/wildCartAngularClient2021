/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuarioPlistheaderUnroutedComponent } from './usuario-plistheader-unrouted.component';

describe('UsuarioPlistheaderUnroutedComponent', () => {
  let component: UsuarioPlistheaderUnroutedComponent;
  let fixture: ComponentFixture<UsuarioPlistheaderUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPlistheaderUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPlistheaderUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

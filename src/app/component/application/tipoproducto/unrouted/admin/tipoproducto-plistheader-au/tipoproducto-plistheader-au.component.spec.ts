/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipoproductoPlistheaderAdminUnroutedComponent } from './tipoproducto-plistheader-au.component';

describe('TipoproductoPlistheaderAdminUnroutedComponent', () => {
  let component: TipoproductoPlistheaderAdminUnroutedComponent;
  let fixture: ComponentFixture<TipoproductoPlistheaderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoproductoPlistheaderAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoPlistheaderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

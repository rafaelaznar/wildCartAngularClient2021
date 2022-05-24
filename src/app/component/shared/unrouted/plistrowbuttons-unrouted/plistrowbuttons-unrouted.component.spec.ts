/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlistrowbuttonsUnroutedComponent } from './plistrowbuttons-unrouted.component';

describe('PlistrowbuttonsUnroutedComponent', () => {
  let component: PlistrowbuttonsUnroutedComponent;
  let fixture: ComponentFixture<PlistrowbuttonsUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlistrowbuttonsUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistrowbuttonsUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

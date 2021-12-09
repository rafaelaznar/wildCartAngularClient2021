/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrePrintComponent } from './preprint.component';

describe('PrePrintComponent', () => {
  let component: PrePrintComponent;
  let fixture: ComponentFixture<PrePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

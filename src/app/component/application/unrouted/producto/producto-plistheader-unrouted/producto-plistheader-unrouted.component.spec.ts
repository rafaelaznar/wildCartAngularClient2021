/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductoPlistheaderUnroutedComponent } from './producto-plistheader-unrouted.component';

describe('ProductoPlistheaderUnroutedComponent', () => {
  let component: ProductoPlistheaderUnroutedComponent;
  let fixture: ComponentFixture<ProductoPlistheaderUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoPlistheaderUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPlistheaderUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoNewRoutedComponent } from './tipoproducto-new-routed.component';

describe('TipoproductoNewRoutedComponent', () => {
  let component: TipoproductoNewRoutedComponent;
  let fixture: ComponentFixture<TipoproductoNewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoNewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoRemoveRoutedComponent } from './tipoproducto-remove-routed.component';

describe('TipoproductoRemoveRoutedComponent', () => {
  let component: TipoproductoRemoveRoutedComponent;
  let fixture: ComponentFixture<TipoproductoRemoveRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoRemoveRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoRemoveRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

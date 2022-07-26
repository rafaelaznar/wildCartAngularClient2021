import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoEditRoutedComponent } from './tipoproducto-edit-routed.component';

describe('TipoproductoEditRoutedComponent', () => {
  let component: TipoproductoEditRoutedComponent;
  let fixture: ComponentFixture<TipoproductoEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoEditRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

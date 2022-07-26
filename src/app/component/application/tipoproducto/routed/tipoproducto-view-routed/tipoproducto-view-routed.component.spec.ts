import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoViewRoutedComponent } from './tipoproducto-view-routed.component';

describe('TipoproductoViewRoutedComponent', () => {
  let component: TipoproductoViewRoutedComponent;
  let fixture: ComponentFixture<TipoproductoViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoViewAdminRoutedComponent } from './tipoproducto-view-admin-routed.component';

describe('TipoproductoViewAdminRoutedComponent', () => {
  let component: TipoproductoViewAdminRoutedComponent;
  let fixture: ComponentFixture<TipoproductoViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoViewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

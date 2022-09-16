import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoNewAdminRoutedComponent } from './tipoproducto-new-admin-routed.component';

describe('TipoproductoNewAdminRoutedComponent', () => {
  let component: TipoproductoNewAdminRoutedComponent;
  let fixture: ComponentFixture<TipoproductoNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoNewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

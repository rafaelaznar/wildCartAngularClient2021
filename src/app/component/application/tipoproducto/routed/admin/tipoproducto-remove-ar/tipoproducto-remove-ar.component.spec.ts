import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoRemoveAdminRoutedComponent } from './tipoproducto-remove-ar.component';

describe('TipoproductoRemoveAdminRoutedComponent', () => {
  let component: TipoproductoRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<TipoproductoRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

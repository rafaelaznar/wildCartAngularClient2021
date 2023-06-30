import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPlistAdminRoutedComponent } from './producto-plist-admin-routed.component';

describe('ProductoPlistAdminRoutedComponent', () => {
  let component: ProductoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<ProductoPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoPlistAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRemoveAdminRoutedComponent } from './producto-remove-admin-routed.component';

describe('ProductoRemoveAdminRoutedComponent', () => {
  let component: ProductoRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<ProductoRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

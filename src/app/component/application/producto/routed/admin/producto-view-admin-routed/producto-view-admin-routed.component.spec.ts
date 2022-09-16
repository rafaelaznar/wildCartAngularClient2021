import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoViewAdminRoutedComponent } from './producto-view-admin-routed.component';

describe('ProductoViewAdminRoutedComponent', () => {
  let component: ProductoViewAdminRoutedComponent;
  let fixture: ComponentFixture<ProductoViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoViewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

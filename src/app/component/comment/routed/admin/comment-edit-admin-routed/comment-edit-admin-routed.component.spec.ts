import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoNewEditRoutedComponent } from './producto-edit-admin-routed.component';

describe('ProductoNewEditRoutedComponent', () => {
  let component: ProductoNewEditRoutedComponent;
  let fixture: ComponentFixture<ProductoNewEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoNewEditRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoNewEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

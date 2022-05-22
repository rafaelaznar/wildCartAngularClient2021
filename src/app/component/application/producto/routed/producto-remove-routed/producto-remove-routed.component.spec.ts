import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRemoveRoutedComponent } from './producto-remove-routed.component';

describe('ProductoRemoveRoutedComponent', () => {
  let component: ProductoRemoveRoutedComponent;
  let fixture: ComponentFixture<ProductoRemoveRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoRemoveRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRemoveRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCViewRoutedComponent } from './producto-cview-routed.component';

describe('ProductoViewRoutedComponent', () => {
  let component: ProductoCViewRoutedComponent;
  let fixture: ComponentFixture<ProductoCViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

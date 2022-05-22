import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoViewRoutedComponent } from './producto-view-routed.component';

describe('ProductoViewRoutedComponent', () => {
  let component: ProductoViewRoutedComponent;
  let fixture: ComponentFixture<ProductoViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

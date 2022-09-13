import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoViewUserRoutedComponent } from './producto-view-ur.component';

describe('ProductoViewAdminRoutedComponent', () => {
  let component: ProductoViewUserRoutedComponent;
  let fixture: ComponentFixture<ProductoViewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoViewUserRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoViewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

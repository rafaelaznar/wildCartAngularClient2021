import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoNewRoutedComponent } from './producto-new-routed.component';




describe('NewProductoComponent', () => {
  let component: ProductoNewRoutedComponent;
  let fixture: ComponentFixture<ProductoNewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoNewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

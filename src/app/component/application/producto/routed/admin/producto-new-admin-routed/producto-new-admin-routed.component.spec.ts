import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoNewAdminRoutedComponent } from './producto-new-admin-routed.component';




describe('NewProductoComponent', () => {
  let component: ProductoNewAdminRoutedComponent;
  let fixture: ComponentFixture<ProductoNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoNewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

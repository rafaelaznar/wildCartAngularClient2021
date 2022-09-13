import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFormAdminUnroutedComponent } from './producto-form-unrouted.component';

describe('ProductoFormAdminUnroutedComponent', () => {
  let component: ProductoFormAdminUnroutedComponent;
  let fixture: ComponentFixture<ProductoFormAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoFormAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoFormAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

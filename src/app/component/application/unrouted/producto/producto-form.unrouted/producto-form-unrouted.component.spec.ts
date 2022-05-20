import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFormUnroutedComponent } from './producto-form-unrouted.component';

describe('ProductoFormUnroutedComponent', () => {
  let component: ProductoFormUnroutedComponent;
  let fixture: ComponentFixture<ProductoFormUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoFormUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

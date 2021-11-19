import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProductoComponent } from './remove-producto.component';

describe('RemoveProductoComponent', () => {
  let component: RemoveProductoComponent;
  let fixture: ComponentFixture<RemoveProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

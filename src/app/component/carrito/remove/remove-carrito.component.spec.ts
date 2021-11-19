import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCarritoComponent } from './remove-carrito.component';

describe('RemoveCarritoComponent', () => {
  let component: RemoveCarritoComponent;
  let fixture: ComponentFixture<RemoveCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

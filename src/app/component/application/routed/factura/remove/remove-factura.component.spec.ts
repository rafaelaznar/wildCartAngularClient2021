import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFacturaComponent } from './remove-factura.component';

describe('RemoveFacturaComponent', () => {
  let component: RemoveFacturaComponent;
  let fixture: ComponentFixture<RemoveFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

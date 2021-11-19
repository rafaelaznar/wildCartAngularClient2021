import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistFacturaComponent } from './plist-factura.component';

describe('PlistFacturaComponent', () => {
  let component: PlistFacturaComponent;
  let fixture: ComponentFixture<PlistFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPlistUnroutedComponent } from './factura-plist-unrouted.component';

describe('FacturaPlistUnroutedComponent', () => {
  let component: FacturaPlistUnroutedComponent;
  let fixture: ComponentFixture<FacturaPlistUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPlistUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

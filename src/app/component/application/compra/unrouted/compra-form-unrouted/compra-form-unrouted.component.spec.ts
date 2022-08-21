import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraFormUnroutedComponent } from './compra-form-unrouted.component';

describe('CompraFormUnroutedComponent', () => {
  let component: CompraFormUnroutedComponent;
  let fixture: ComponentFixture<CompraFormUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraFormUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraFormAdminUnroutedComponent } from './compra-form-au.component';

describe('CompraFormAdminUnroutedComponent', () => {
  let component: CompraFormAdminUnroutedComponent;
  let fixture: ComponentFixture<CompraFormAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraFormAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraFormAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

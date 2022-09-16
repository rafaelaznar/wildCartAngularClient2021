import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraNewAdminRoutedComponent } from './compra-new-admin-routed.component';

describe('TipoproductoNewAdminRoutedComponent', () => {
  let component: CompraNewAdminRoutedComponent;
  let fixture: ComponentFixture<CompraNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraNewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

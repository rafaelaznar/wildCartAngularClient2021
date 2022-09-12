import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraNewAdminRoutedComponent } from './compra-new-ar.component';

describe('TipoproductoNewRoutedComponent', () => {
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

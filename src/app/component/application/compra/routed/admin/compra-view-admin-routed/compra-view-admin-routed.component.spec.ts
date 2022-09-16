import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraViewAdminRoutedComponent } from './compra-view-admin-routed.component';

describe('CompraViewAdminRoutedComponent', () => {
  let component: CompraViewAdminRoutedComponent;
  let fixture: ComponentFixture<CompraViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraViewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

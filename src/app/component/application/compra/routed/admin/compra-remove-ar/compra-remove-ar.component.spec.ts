import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRemoveAdminRoutedComponent } from './compra-remove-ar.component';

describe('CompraRemoveAdminRoutedComponent', () => {
  let component: CompraRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<CompraRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

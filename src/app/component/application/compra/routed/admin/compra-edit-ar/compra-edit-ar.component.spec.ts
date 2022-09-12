import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEditAdminRoutedComponent } from './compra-edit-ar.component';

describe('CompraEditAdminRoutedComponent', () => {
  let component: CompraEditAdminRoutedComponent;
  let fixture: ComponentFixture<CompraEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraEditAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

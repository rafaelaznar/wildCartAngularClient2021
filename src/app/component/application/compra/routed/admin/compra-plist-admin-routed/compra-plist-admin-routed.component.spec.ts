import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPlistAdminRoutedComponent } from './compra-plist-admin-routed.component';

describe('PlistCompraComponent', () => {
  let component: CompraPlistAdminRoutedComponent;
  let fixture: ComponentFixture<CompraPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraPlistAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

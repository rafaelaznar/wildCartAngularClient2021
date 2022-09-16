import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPlistAdminUnroutedComponent } from './compra-plist-admin-unrouted.component';

describe('CompraPlistAdminUnroutedComponent', () => {
  let component: CompraPlistAdminUnroutedComponent;
  let fixture: ComponentFixture<CompraPlistAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraPlistAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistTipoproductoAdminComponent } from './tipoproducto-plist-admin-routed.component';

describe('PlistTipoproductoAdminComponent', () => {
  let component: PlistTipoproductoAdminComponent;
  let fixture: ComponentFixture<PlistTipoproductoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistTipoproductoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistTipoproductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

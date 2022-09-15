import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistTipoproductoAdminComponent } from './tipoproducto-plist-ar.component';

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

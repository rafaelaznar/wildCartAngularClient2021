import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistTipoproductoComponent } from './plist-tipoproducto.component';

describe('PlistTipoproductoComponent', () => {
  let component: PlistTipoproductoComponent;
  let fixture: ComponentFixture<PlistTipoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistTipoproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistTipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

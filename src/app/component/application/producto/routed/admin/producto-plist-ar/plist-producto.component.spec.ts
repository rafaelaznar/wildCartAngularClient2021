import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistProductoComponent } from './plist-producto.component';

describe('PlistProductoComponent', () => {
  let component: PlistProductoComponent;
  let fixture: ComponentFixture<PlistProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

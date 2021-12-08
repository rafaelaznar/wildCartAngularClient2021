import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistCompraComponent } from './plist-compra.component';

describe('PlistCompraComponent', () => {
  let component: PlistCompraComponent;
  let fixture: ComponentFixture<PlistCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistCarritoComponent } from './plist-carrito.component';

describe('PlistCarritoComponent', () => {
  let component: PlistCarritoComponent;
  let fixture: ComponentFixture<PlistCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

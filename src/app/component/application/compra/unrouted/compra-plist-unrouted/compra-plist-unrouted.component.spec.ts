import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPlistUnroutedComponent } from './compra-plist-unrouted.component';

describe('CompraPlistUnroutedComponent', () => {
  let component: CompraPlistUnroutedComponent;
  let fixture: ComponentFixture<CompraPlistUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraPlistUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

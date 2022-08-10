import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPlistRoutedComponent } from './compra-plist-routed.component';

describe('PlistCompraComponent', () => {
  let component: CompraPlistRoutedComponent;
  let fixture: ComponentFixture<CompraPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraPlistRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

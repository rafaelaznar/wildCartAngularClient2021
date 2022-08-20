import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRemoveRoutedComponent } from './compra-remove-routed.component';

describe('CompraRemoveRoutedComponent', () => {
  let component: CompraRemoveRoutedComponent;
  let fixture: ComponentFixture<CompraRemoveRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraRemoveRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraRemoveRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

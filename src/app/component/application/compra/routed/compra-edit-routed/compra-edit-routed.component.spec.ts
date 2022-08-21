import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEditRoutedComponent } from './compra-edit-routed.component';

describe('CompraEditRoutedComponent', () => {
  let component: CompraEditRoutedComponent;
  let fixture: ComponentFixture<CompraEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraEditRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraViewRoutedComponent } from './compra-view-routed.component';

describe('CompraViewRoutedComponent', () => {
  let component: CompraViewRoutedComponent;
  let fixture: ComponentFixture<CompraViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

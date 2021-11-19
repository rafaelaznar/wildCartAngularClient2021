import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompraComponent } from './view-compra.component';

describe('ViewCompraComponent', () => {
  let component: ViewCompraComponent;
  let fixture: ComponentFixture<ViewCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

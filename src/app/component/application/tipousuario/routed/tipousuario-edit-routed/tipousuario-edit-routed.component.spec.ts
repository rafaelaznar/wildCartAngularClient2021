import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioEditRoutedComponent } from './tipousuario-edit-routed.component';

describe('TipousuarioEditRoutedComponent', () => {
  let component: TipousuarioEditRoutedComponent;
  let fixture: ComponentFixture<TipousuarioEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioEditRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

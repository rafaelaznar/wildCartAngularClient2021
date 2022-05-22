import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioViewRoutedComponent } from './tipousuario-view-routed.component';

describe('TipousuarioViewRoutedComponent', () => {
  let component: TipousuarioViewRoutedComponent;
  let fixture: ComponentFixture<TipousuarioViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

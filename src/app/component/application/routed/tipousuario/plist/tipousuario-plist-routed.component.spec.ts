import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioPlistRoutedComponent } from './tipousuario-plist-routed.component';

describe('TipousuarioPlistRoutedComponent', () => {
  let component: TipousuarioPlistRoutedComponent;
  let fixture: ComponentFixture<TipousuarioPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioPlistRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

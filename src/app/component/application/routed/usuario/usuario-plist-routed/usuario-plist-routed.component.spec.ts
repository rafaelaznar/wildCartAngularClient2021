import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPlistRoutedComponent } from './usuario-plist-routed.component';

describe('UsuarioPlistRoutedComponent', () => {
  let component: UsuarioPlistRoutedComponent;
  let fixture: ComponentFixture<UsuarioPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPlistRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

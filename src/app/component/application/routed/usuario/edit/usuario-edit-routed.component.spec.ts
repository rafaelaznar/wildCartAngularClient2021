import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditRoutedComponent } from './usuario-edit-routed.component';

describe('UsuarioEditRoutedComponent', () => {
  let component: UsuarioEditRoutedComponent;
  let fixture: ComponentFixture<UsuarioEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

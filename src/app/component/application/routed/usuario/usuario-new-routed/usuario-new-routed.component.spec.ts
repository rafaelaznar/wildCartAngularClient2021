import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNewRoutedComponent } from './usuario-new-routed.component';

describe('UsuarioNewRoutedComponent', () => {
  let component: UsuarioNewRoutedComponent;
  let fixture: ComponentFixture<UsuarioNewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioNewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

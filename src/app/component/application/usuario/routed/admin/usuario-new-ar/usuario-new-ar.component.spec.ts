import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNewAdminRoutedComponent } from './usuario-new-ar.component';

describe('UsuarioNewAdminRoutedComponent', () => {
  let component: UsuarioNewAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioNewAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

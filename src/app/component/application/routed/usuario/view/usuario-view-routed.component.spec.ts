import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioViewRoutedComponent } from './usuario-view-routed.component';

describe('UsuarioViewRoutedComponent', () => {
  let component: UsuarioViewRoutedComponent;
  let fixture: ComponentFixture<UsuarioViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

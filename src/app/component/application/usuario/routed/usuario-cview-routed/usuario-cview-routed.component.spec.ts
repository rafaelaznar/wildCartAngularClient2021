import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCViewRoutedComponent } from './usuario-cview-routed.component';

describe('UsuarioCViewRoutedComponent', () => {
  let component: UsuarioCViewRoutedComponent;
  let fixture: ComponentFixture<UsuarioCViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCViewRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

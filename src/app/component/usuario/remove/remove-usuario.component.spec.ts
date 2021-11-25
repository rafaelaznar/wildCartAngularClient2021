import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUsuarioComponent } from './remove-usuario.component';

describe('RemoveUsuarioComponent', () => {
  let component: RemoveUsuarioComponent;
  let fixture: ComponentFixture<RemoveUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

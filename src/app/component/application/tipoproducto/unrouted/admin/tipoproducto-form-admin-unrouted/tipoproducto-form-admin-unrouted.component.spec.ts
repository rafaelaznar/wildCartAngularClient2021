import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoFormAdminUnroutedComponent } from './tipoproducto-form-admin-unrouted.component';

describe('TipoproductoFormAdminUnroutedComponent', () => {
  let component: TipoproductoFormAdminUnroutedComponent;
  let fixture: ComponentFixture<TipoproductoFormAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoFormAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoFormAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoFormUnroutedComponent } from './tipoproducto-form-unrouted.component';

describe('TipoproductoFormUnroutedComponent', () => {
  let component: TipoproductoFormUnroutedComponent;
  let fixture: ComponentFixture<TipoproductoFormUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoFormUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

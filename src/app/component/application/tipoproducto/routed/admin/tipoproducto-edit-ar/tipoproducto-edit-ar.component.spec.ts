import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoEditAdminRoutedComponent } from './tipoproducto-edit-ar.component';

describe('TipoproductoEditAdminRoutedComponent', () => {
  let component: TipoproductoEditAdminRoutedComponent;
  let fixture: ComponentFixture<TipoproductoEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoEditAdminRoutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

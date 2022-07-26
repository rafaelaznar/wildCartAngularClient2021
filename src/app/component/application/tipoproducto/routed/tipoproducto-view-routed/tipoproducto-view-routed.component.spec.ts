import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTipoproductoComponent } from './tipoproducto-view-routed.component';

describe('ViewTipoproductoComponent', () => {
  let component: ViewTipoproductoComponent;
  let fixture: ComponentFixture<ViewTipoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTipoproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

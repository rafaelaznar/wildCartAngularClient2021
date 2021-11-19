import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTipoproductoComponent } from './new-tipoproducto.component';

describe('NewTipoproductoComponent', () => {
  let component: NewTipoproductoComponent;
  let fixture: ComponentFixture<NewTipoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTipoproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

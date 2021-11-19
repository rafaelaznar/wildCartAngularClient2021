import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoproductoComponent } from './edit-tipoproducto.component';

describe('EditTipoproductoComponent', () => {
  let component: EditTipoproductoComponent;
  let fixture: ComponentFixture<EditTipoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

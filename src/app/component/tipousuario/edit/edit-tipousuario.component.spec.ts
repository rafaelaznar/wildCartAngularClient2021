import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipousuarioComponent } from './edit-tipousuario.component';

describe('EditTipousuarioComponent', () => {
  let component: EditTipousuarioComponent;
  let fixture: ComponentFixture<EditTipousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipousuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

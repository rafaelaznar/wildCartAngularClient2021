import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTipousuarioComponent } from './view-tipousuario.component';

describe('ViewTipousuarioComponent', () => {
  let component: ViewTipousuarioComponent;
  let fixture: ComponentFixture<ViewTipousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTipousuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTipousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

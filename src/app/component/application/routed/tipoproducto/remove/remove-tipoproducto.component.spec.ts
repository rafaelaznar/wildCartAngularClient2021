import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTipoproductoComponent } from './remove-tipoproducto.component';

describe('RemoveTipoproductoComponent', () => {
  let component: RemoveTipoproductoComponent;
  let fixture: ComponentFixture<RemoveTipoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTipoproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

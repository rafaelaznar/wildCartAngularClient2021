import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoplistunroutedComponent } from './tipoproductoplistunrouted.component';

describe('TipoproductoplistunroutedComponent', () => {
  let component: TipoproductoplistunroutedComponent;
  let fixture: ComponentFixture<TipoproductoplistunroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoplistunroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoplistunroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

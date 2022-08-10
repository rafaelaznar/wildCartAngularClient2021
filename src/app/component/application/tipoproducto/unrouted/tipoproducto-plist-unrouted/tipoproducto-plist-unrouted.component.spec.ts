import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoproductoPlistUnroutedComponent } from './tipoproducto-plist-unrouted.component';



describe('TipoproductoPlistUnroutedComponent', () => {
  let component: TipoproductoPlistUnroutedComponent;
  let fixture: ComponentFixture<TipoproductoPlistUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoPlistUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

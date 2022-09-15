import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoproductoPlistAdminUnroutedComponent } from './tipoproducto-plist-au.component';



describe('TipoproductoPlistAdminUnroutedComponent', () => {
  let component: TipoproductoPlistAdminUnroutedComponent;
  let fixture: ComponentFixture<TipoproductoPlistAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoPlistAdminUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoproductoPlistAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

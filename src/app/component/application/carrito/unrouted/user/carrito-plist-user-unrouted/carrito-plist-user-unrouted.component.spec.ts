import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPlistUserUnroutedComponent } from './carrito-plist-user-unrouted.component';



describe('CarritoPlistAdminUnroutedComponent', () => {
  let component: CarritoPlistUserUnroutedComponent;
  let fixture: ComponentFixture<CarritoPlistUserUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistUserUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistUserUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

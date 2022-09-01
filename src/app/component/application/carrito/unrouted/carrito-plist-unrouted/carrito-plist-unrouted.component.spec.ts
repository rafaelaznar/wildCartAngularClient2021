import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPlistUnroutedComponent } from './carrito-plist-unrouted.component';



describe('CarritoPlistUnroutedComponent', () => {
  let component: CarritoPlistUnroutedComponent;
  let fixture: ComponentFixture<CarritoPlistUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

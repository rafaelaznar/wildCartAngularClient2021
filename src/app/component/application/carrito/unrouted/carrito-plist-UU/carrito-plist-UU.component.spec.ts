import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPlistUUComponent } from './carrito-plist-UU.component';



describe('CarritoPlistAUComponent', () => {
  let component: CarritoPlistUUComponent;
  let fixture: ComponentFixture<CarritoPlistUUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistUUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistUUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPlistAUComponent } from './carrito-plist-AU.component';



describe('CarritoPlistAUComponent', () => {
  let component: CarritoPlistAUComponent;
  let fixture: ComponentFixture<CarritoPlistAUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistAUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

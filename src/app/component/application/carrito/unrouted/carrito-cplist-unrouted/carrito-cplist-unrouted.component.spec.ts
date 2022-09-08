import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoCPlistUnroutedComponent } from './carrito-cplist-unrouted.component';



describe('CarritoPlistUnroutedComponent', () => {
  let component: CarritoCPlistUnroutedComponent;
  let fixture: ComponentFixture<CarritoCPlistUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoCPlistUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoCPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

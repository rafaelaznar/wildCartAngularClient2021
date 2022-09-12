import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPlistAdminUnroutedComponent } from './carrito-plist-au.component';



describe('CarritoPlistAdminUnroutedComponent', () => {
  let component: CarritoPlistAdminUnroutedComponent;
  let fixture: ComponentFixture<CarritoPlistAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoPlistAdminUnroutedComponent ]
    })    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPlistAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

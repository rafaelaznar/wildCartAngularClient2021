import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturaPlistUserUnroutedComponent } from './factura-plist-user-unrouted.component';



describe('FacturaPlistAdminUnroutedComponent', () => {
  let component: FacturaPlistUserUnroutedComponent;
  let fixture: ComponentFixture<FacturaPlistUserUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPlistUserUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPlistUserUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

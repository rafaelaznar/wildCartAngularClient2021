import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUnroutedComponent } from './menu-unrouted.component';

describe('MenuUnroutedComponent', () => {
  let component: MenuUnroutedComponent;
  let fixture: ComponentFixture<MenuUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUnroutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

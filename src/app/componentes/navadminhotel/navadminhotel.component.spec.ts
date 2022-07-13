import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavadminhotelComponent } from './navadminhotel.component';

describe('NavadminhotelComponent', () => {
  let component: NavadminhotelComponent;
  let fixture: ComponentFixture<NavadminhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavadminhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavadminhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

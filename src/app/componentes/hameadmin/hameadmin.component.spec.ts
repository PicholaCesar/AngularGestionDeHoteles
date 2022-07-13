import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HameadminComponent } from './hameadmin.component';

describe('HameadminComponent', () => {
  let component: HameadminComponent;
  let fixture: ComponentFixture<HameadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HameadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HameadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

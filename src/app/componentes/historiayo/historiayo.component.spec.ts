import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriayoComponent } from './historiayo.component';

describe('HistoriayoComponent', () => {
  let component: HistoriayoComponent;
  let fixture: ComponentFixture<HistoriayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriayoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

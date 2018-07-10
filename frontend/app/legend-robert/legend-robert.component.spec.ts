import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendRobertComponent } from './legend-robert.component';

describe('LegendRobertComponent', () => {
  let component: LegendRobertComponent;
  let fixture: ComponentFixture<LegendRobertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendRobertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendRobertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

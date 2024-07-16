import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherChartsComponent } from './higher-charts.component';

describe('HigherChartsComponent', () => {
  let component: HigherChartsComponent;
  let fixture: ComponentFixture<HigherChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HigherChartsComponent]
    });
    fixture = TestBed.createComponent(HigherChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

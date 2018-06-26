import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsDetailsComponent } from './indicators-details.component';

describe('IndicatorsDetailsComponent', () => {
  let component: IndicatorsDetailsComponent;
  let fixture: ComponentFixture<IndicatorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

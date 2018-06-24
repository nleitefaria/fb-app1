import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeLevelsCountriesComponent } from './income-levels-countries.component';

describe('IncomeLevelsCountriesComponent', () => {
  let component: IncomeLevelsCountriesComponent;
  let fixture: ComponentFixture<IncomeLevelsCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeLevelsCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeLevelsCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

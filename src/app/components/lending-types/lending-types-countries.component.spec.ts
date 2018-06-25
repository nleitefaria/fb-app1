import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingTypesCountriesComponent } from './lending-types-countries.component';

describe('LendingTypesCountriesComponent', () => {
  let component: LendingTypesCountriesComponent;
  let fixture: ComponentFixture<LendingTypesCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingTypesCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingTypesCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

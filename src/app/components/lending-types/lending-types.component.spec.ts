import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingTypesComponent } from './lending-types.component';

describe('LendingTypesComponent', () => {
  let component: LendingTypesComponent;
  let fixture: ComponentFixture<LendingTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

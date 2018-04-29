import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeLevelsComponent } from './income-levels.component';

describe('IncomeLevelsComponent', () => {
  let component: IncomeLevelsComponent;
  let fixture: ComponentFixture<IncomeLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

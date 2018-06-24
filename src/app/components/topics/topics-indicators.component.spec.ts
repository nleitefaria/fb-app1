import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsIndicatorsComponent } from './topics-indicators.component';

describe('TopicsIndicatorsComponent', () => {
  let component: TopicsIndicatorsComponent;
  let fixture: ComponentFixture<TopicsIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

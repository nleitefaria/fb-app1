import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesDetailsComponent } from './sources-details.component';

describe('SourcesDetailsComponent', () => {
  let component: SourcesDetailsComponent;
  let fixture: ComponentFixture<SourcesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

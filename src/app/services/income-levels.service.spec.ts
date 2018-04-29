import { TestBed, inject } from '@angular/core/testing';

import { IncomeLevelsService } from './income-levels.service';

describe('IncomeLevelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomeLevelsService]
    });
  });

  it('should be created', inject([IncomeLevelsService], (service: IncomeLevelsService) => {
    expect(service).toBeTruthy();
  }));
});

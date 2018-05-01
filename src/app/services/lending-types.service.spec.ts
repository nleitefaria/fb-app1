import { TestBed, inject } from '@angular/core/testing';

import { LendingTypesService } from './lending-types.service';

describe('LendingTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LendingTypesService]
    });
  });

  it('should be created', inject([LendingTypesService], (service: LendingTypesService) => {
    expect(service).toBeTruthy();
  }));
});

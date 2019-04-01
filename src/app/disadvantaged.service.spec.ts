import { TestBed } from '@angular/core/testing';

import { DisadvantagedService } from './disadvantaged.service';

describe('DisadvantagedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisadvantagedService = TestBed.get(DisadvantagedService);
    expect(service).toBeTruthy();
  });
});

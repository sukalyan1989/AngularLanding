import { TestBed } from '@angular/core/testing';

import { COREService } from './core.service';

describe('COREService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: COREService = TestBed.get(COREService);
    expect(service).toBeTruthy();
  });
});

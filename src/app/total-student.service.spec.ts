import { TestBed } from '@angular/core/testing';

import { TotalStudentService } from './total-student.service';

describe('TotalStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TotalStudentService = TestBed.get(TotalStudentService);
    expect(service).toBeTruthy();
  });
});

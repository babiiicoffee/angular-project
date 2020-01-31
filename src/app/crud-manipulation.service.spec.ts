import { TestBed } from '@angular/core/testing';

import { CrudManipulationService } from './crud-manipulation.service';

describe('CrudManipulationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudManipulationService = TestBed.get(CrudManipulationService);
    expect(service).toBeTruthy();
  });
});

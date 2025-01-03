import { TestBed } from '@angular/core/testing';

import { MineriaService } from './mineria.service';

describe('MineriaService', () => {
  let service: MineriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MejorAlternativaService } from './mejor-alternativa.service';

describe('MejorAlternativaService', () => {
  let service: MejorAlternativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MejorAlternativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

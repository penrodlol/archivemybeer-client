import { TestBed } from '@angular/core/testing';

import { BeerContextCountryService } from './beer-context-country.service';

describe('BeerContextCountryService', () => {
  let service: BeerContextCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerContextCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

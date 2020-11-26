import { TestBed } from '@angular/core/testing';

import { BeersListColumnsService } from './beers-list-columns.service';

describe('BeersListColumnsService', () => {
  let service: BeersListColumnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersListColumnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

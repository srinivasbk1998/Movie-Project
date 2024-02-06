import { TestBed } from '@angular/core/testing';

import { MovieApiserviceService } from './movie-apiservice.service';

describe('MovieApiserviceService', () => {
  let service: MovieApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

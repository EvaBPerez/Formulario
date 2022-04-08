import { TestBed } from '@angular/core/testing';

import { MovileService } from './movile.service';

describe('MovileService', () => {
  let service: MovileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

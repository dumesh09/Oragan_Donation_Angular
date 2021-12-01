import { TestBed } from '@angular/core/testing';

import { RecepientService } from './recepient.service';

describe('RecepientService', () => {
  let service: RecepientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

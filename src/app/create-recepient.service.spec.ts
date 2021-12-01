import { TestBed } from '@angular/core/testing';

import { CreateRecepientService } from './create-recepient.service';

describe('CreateRecepientService', () => {
  let service: CreateRecepientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRecepientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

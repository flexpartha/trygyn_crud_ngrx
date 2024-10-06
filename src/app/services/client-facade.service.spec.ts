import { TestBed } from '@angular/core/testing';

import { ClientFacadeService } from './client-facade.service';

describe('ClientFacadeService', () => {
  let service: ClientFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

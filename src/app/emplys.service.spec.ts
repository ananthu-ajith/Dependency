import { TestBed } from '@angular/core/testing';

import { EmplysService } from './emplys.service';

describe('EmplysService', () => {
  let service: EmplysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

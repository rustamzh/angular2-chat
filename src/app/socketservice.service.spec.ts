/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketserviceService } from './socketservice.service';

describe('SocketserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketserviceService]
    });
  });

  it('should ...', inject([SocketserviceService], (service: SocketserviceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { EventListingService } from './ticket-listing.service';

describe('TicketListingService', () => {
  let service: EventListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

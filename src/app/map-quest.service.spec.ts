import { TestBed, inject } from '@angular/core/testing';

import { MapQuestService } from './map-quest.service';

describe('MapQuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapQuestService]
    });
  });

  it('should be created', inject([MapQuestService], (service: MapQuestService) => {
    expect(service).toBeTruthy();
  }));
});

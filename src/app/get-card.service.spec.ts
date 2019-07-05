import { TestBed } from '@angular/core/testing';

import { GetCardService } from './get-card.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: GetCardService = TestBed.get(GetCardService);
    expect(service).toBeTruthy();
  });
});

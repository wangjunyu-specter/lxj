import { TestBed } from '@angular/core/testing';

import { EmojiishowService } from './emojiishow.service';

describe('EmojiishowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmojiishowService = TestBed.get(EmojiishowService);
    expect(service).toBeTruthy();
  });
});

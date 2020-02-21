import { TestBed } from '@angular/core/testing';

import { PostPreviewService } from './post-preview.service';

describe('PostPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostPreviewService = TestBed.get(PostPreviewService);
    expect(service).toBeTruthy();
  });
});

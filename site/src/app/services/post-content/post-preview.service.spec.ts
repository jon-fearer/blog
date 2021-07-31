import { TestBed } from '@angular/core/testing';
import { PostPreviewService } from './post-preview.service';
import { HttpClientModule } from '@angular/common/http';

describe('PostPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: PostPreviewService = TestBed.get(PostPreviewService);
    expect(service).toBeTruthy();
  });
});

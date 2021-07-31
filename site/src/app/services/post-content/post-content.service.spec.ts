import { TestBed } from '@angular/core/testing';
import { PostContentService } from './post-content.service';
import { HttpClientModule } from '@angular/common/http';

describe('PostContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: PostContentService = TestBed.get(PostContentService);
    expect(service).toBeTruthy();
  });
});

import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Logger } from '../services/logger/logger';
import { PostPreviewService } from '../services/post-content/post-preview.service';
import { IPost, IPostPreview } from '../shared/interfaces';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent implements OnInit, OnChanges {
  @Output() postSelectEvent = new EventEmitter();
  @Input() filterDate: Date;
  @Input() filterTag: string;

  posts: IPost[] = [];
  filteredPosts: IPost[] = [];

  constructor(private postPreviewService: PostPreviewService, private logger: Logger) {}

  ngOnInit() {
    this.getPosts();
  }

  ngOnChanges() {
    this.filterPosts();
  }

  filterPosts() {
    let filteredPosts: IPost[] = this.posts;
    if (this.filterDate) {
      filteredPosts = filteredPosts.filter((p) => {
        const postDate = new Date(p.postedOn);
        return postDate.getMonth() === this.filterDate.getMonth() &&
          postDate.getFullYear() === this.filterDate.getFullYear();
      });
    }
    if (this.filterTag) {
      filteredPosts = filteredPosts.filter((p: IPost) => p.tags.includes(this.filterTag));
    }
    this.filteredPosts = filteredPosts;
  }

  getPosts(): void {
    this.logger.log('getting posts');
    this.postPreviewService
        .getPostPreviews()
        .subscribe((posts: IPostPreview[]) => {
          this.logger.log('received posts');
          this.posts = posts.map((el) => ({
            title: el.title,
            path: el.path,
            postedOn: el.postedOn,
            imagePath: `${environment.contentBasePath}/${el.image}`,
            tags: el.tags,
          }));
          this.filterPosts();
        });
  }
}

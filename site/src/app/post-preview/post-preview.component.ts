import { Component, Input, Output, EventEmitter, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Logger } from '../services/logger/logger';
import { PostPreviewService } from '../services/post-content/post-preview.service';
import { IPost, IPostPreview } from '../shared/interfaces';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent implements OnInit, OnChanges, OnDestroy {
  @Output() postSelectEvent = new EventEmitter();
  @Input() filterDate: Date;
  @Input() filterTag: string;
  @Input() filterText: string;
  subscription: Subscription;
  posts: IPost[] = [];
  filteredPosts: IPost[] = [];

  constructor(private postPreviewService: PostPreviewService, private logger: Logger) {}

  ngOnInit() {
    this.getPosts();
  }

  ngOnChanges() {
    this.filterPosts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // TODO needs better pattern/signature
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
    if (this.filterText) {
      filteredPosts = filteredPosts.filter((p: IPost) => (
        p.tags.some((t) => t.includes(this.filterText)) || p.title.includes(this.filterText)
      ));
    }
    this.filteredPosts = filteredPosts;
  }

  getPosts(): void {
    this.logger.log('getting posts');
    this.subscription = this.postPreviewService
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

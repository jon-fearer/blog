import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
} from '@angular/core';
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

  posts: IPost[] = [];
  filteredPosts: IPost[] = [];

  constructor(private postPreviewService: PostPreviewService,
    private logger: Logger) {}

  ngOnInit() {
    this.getPosts();
  }

  ngOnChanges() {
    this.filterPosts();
  }

  filterPosts() {
    if (!this.filterDate) {
      this.filteredPosts = this.posts;
      return;
    }

    this.filteredPosts = this.posts.filter((p) => {
      const postDate = new Date(p.postedOn);
      return postDate.getMonth() === this.filterDate.getMonth() &&
        postDate.getFullYear() === this.filterDate.getFullYear();
    });
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
          }));
          this.filteredPosts = this.posts;
        });
  }
}

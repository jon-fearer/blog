import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
} from '@angular/core';
import {
  IPostPreview,
  PostPreviewService,
} from '../services/post-preview.service';


@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent implements OnInit, OnChanges {
  @Output() postSelectEvent = new EventEmitter();

  @Input() filterDate: Date;

  posts: {
    title: string,
    path: string,
    postedOn: string,
  }[] = [];

  filteredPosts: {
    title: string,
    path: string,
    postedOn: string,
  }[] = [];

  constructor(private postPreviewService: PostPreviewService) {}

  ngOnInit() {
    this.getPosts();
  }

  ngOnChanges() {
    this.filterPosts();
  }

  logTitle(title: string) {
    console.log(title);
  }

  filterPosts() {
    if (!this.filterDate) {
      this.filteredPosts = this.posts;

      return;
    }

    this.filteredPosts = this.posts.filter((p) => {
      const postDate = new Date(p.postedOn);

      if (postDate.getMonth() === this.filterDate.getMonth() &&
          postDate.getFullYear() === this.filterDate.getFullYear()) {
        return true;
      }

      return false;
    });
  }

  static parsePostedOnDate(path: string) {
    const pathArr = path.split('/').slice(-3);

    return [
      pathArr[1],
      pathArr[2].split('.')[0],
      pathArr[0],
    ].join('/');
  }

  getPosts(): void {
    this.postPreviewService
        .getPostPreviews()
        .subscribe((posts: IPostPreview[]) => {
          this.posts = posts.map((el) => ({
            title: el.title,
            path: el.path,
            postedOn: PostPreviewComponent.parsePostedOnDate(el.path),
          }));

          this.filteredPosts = this.posts;
        });
  }
}

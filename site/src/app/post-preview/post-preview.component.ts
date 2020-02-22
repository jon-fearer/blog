import {
  Component,
  Output,
  EventEmitter,
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
export class PostPreviewComponent implements OnInit {
  @Output() postSelectEvent = new EventEmitter();

  posts: {
    title: string,
    path: string,
    postedOn: string,
  }[];

  constructor(private postPreviewService: PostPreviewService) {}

  ngOnInit() {
    this.getPosts();
  }

  logTitle(title: string) {
    console.log(title);
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
        });
  }
}

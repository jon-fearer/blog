import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {PostContentService} from '../services/post-content.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() path: string;

  content: string;

  constructor(private postContentService: PostContentService) { }

  ngOnInit() {
    this.getPostContent();
  }

  getPostContent() {
    this.postContentService
        .getPostContent(this.path)
        .subscribe((content: string) => this.content = content);
  }
}

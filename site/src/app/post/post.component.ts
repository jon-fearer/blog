import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {PostContentService} from '../services/post-content.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() path: string;

  content: SafeHtml;

  constructor(private postContentService: PostContentService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getPostContent();
  }

  getPostContent() {
    this.postContentService
        .getPostContent(this.path)
        .subscribe((content: string) => {
          this.content = this.sanitizer.bypassSecurityTrustHtml(content);
        });
  }
}

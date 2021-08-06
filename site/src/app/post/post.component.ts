import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { PostContentService } from '../services/post-content/post-content.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() path: string;
  subscription: Subscription;
  content: SafeHtml;

  constructor(private postContentService: PostContentService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getPostContent();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getPostContent() {
    this.subscription = this.postContentService
        .getPostContent(this.path)
        .subscribe((content: string) => {
          this.content = this.sanitizer.bypassSecurityTrustHtml(content);
        });
  }
}

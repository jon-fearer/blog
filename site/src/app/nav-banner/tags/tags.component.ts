import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { IPost } from '../../shared/interfaces';
import { PostPreviewService } from '../../services/post-content/post-preview.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  @Output() tagSelectedEvent = new EventEmitter();
  tags: string[] = [];

  constructor(private postPreviewService: PostPreviewService) {}

  ngOnInit() {
    this.getTags();
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent) {
    if ((event.target as any).className.includes('p-button')) {
      this.tagSelectedEvent.emit((event.target as any).innerText);
    }
  }

  getTags() {
    this.postPreviewService
        .getPostPreviews()
        .subscribe((posts: IPost[]) => {
          const flattenedTags = posts
              .map((el) => el.tags)
              .reduce((acc, val) => acc.concat(val), []);
          this.tags = [...new Set(flattenedTags)];
        });
  }
}

import { Component } from '@angular/core';
import { IKeyboardEvent } from '../shared/interfaces';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  title = 'site';
  currentComponent: 'postPreview'|'post'|'bio' = 'postPreview';
  postPath: string;
  filterDate: Date;
  filterTag: string;
  filterText: string;

  togglePost(postPath: string) {
    this.postPath = postPath;
    this.currentComponent = 'post';
  }

  unselectPost() {
    this.currentComponent = 'postPreview';
    // Reset to most recent posts when loading post previews
    window.scroll(0, 0);
  }

  filterPostsByMonth(event?: Date) {
    this.filterDate = event;
    this.filterTag = undefined;
    this.filterText = undefined;
    this.currentComponent = 'postPreview';
  }

  filterPostsByTag(event?: string) {
    this.filterTag = event;
    this.filterDate = undefined;
    this.filterText = undefined;
    this.currentComponent = 'postPreview';
  }

  filterPostsByText(event?: IKeyboardEvent) {
    this.filterDate = undefined;
    this.filterTag = undefined;
    this.filterText = event?.target?.value;
    this.currentComponent = 'postPreview';
  }
}

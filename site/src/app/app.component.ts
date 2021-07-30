import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filterDate: Date;
  filterTag: string;
  title = 'site';
  currentComponent: 'postPreview'|'post'|'bio' = 'postPreview';
  postPath: string;

  togglePost(postPath: string) {
    this.postPath = postPath;
    this.currentComponent = 'post';
  }

  unselectPost() {
    this.currentComponent = 'postPreview';
  }

  filterPostsByMonth(event?: Date) {
    this.filterDate = event;
    this.filterTag = undefined;
    this.currentComponent = 'postPreview';
  }

  filterPostsByTag(event?: string) {
    this.filterTag = event;
    this.filterDate = undefined;
    this.currentComponent = 'postPreview';
  }
}

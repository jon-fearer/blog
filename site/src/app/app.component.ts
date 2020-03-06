import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filterDate: Date;

  title = 'site';

  currentComponent:
    'postPreview'
    | 'post'
    | 'bio' = 'postPreview';

  postPath: string;

  togglePost(postPath: string) {
    this.postPath = postPath;

    this.currentComponent = 'post';
  }

  unselectPost() {
    this.currentComponent = 'postPreview';
  }

  filterPostsByMonth(event: Date) {
    this.filterDate = event;
  }
}

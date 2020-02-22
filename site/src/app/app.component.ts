import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'site';

  postSelected = false;

  path: string;

  togglePost(postPath: string) {
    console.log(postPath);
    this.path = postPath;
    this.postSelected = !this.postSelected;
  }

  unselectPost() {
    this.postSelected = false;
  }
}

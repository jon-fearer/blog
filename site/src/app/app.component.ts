import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'site';

  postSelected = false;

  togglePost(postTitle: string) {
    console.log(postTitle);
    this.postSelected = !this.postSelected;
  }

  unselectPost() {
    this.postSelected = false;
  }
}

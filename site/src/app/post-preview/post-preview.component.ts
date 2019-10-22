import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
    + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
    + 'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '
    + 'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'
    + 'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in '
    + 'culpa qui officia deserunt mollit anim id est laborum.';

  posts = [
    {
      title: 'Doing Stuff With Typescript',
      img: '',
      path: '',
      text: this.loremText,
    },
    {
      title: 'Doing Stuff With AWS',
      img: '',
      path: '',
      text: this.loremText,
    },
    {
      title: 'Doing Stuff With Postgres',
      img: '',
      path: '',
      text: this.loremText,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

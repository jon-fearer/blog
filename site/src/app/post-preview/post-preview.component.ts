import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  posts = [
    {
      title: 'Doing Stuff With Typescript',
      img: '',
      path: '',
    },
    {
      title: 'Doing Stuff With AWS',
      img: '',
      path: '',
    },
    {
      title: 'Doing Stuff With Postgres',
      img: '',
      path: '',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags = [
    'amazon web services',
    'google cloud',
    'postgresql',
    'serverless',
    'amazon web services',
    'google cloud',
    'postgresql',
    'serverless',
    'amazon web services',
    'google cloud',
    'postgresql',
    'serverless',
  ];

  constructor() { }

  ngOnInit() {
  }

}

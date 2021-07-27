import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent implements OnInit {
  messageContent = [{
    severity: 'warn',
    summary: 'Warning',
    detail: 'This blog is a work in progress. Some features such as search, ' +
      'tags and mobile navigation are not functional yet.',
  }];

  constructor() {
  }

  ngOnInit(): void {
  }
}

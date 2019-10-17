import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.scss']
})
export class NavBannerComponent implements OnInit {
  showSearch = false;

  piTagsMarginRight = 45;
  piTagsMarginRightPx = `${this.piTagsMarginRight}px`;
  piSearchMarginRight = 10;
  piSearchMarginRightPx = `${this.piSearchMarginRight}px`;

  constructor() { }

  ngOnInit() {
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;

    if (this.showSearch) {
      this.piTagsMarginRight += 200;
      this.piSearchMarginRight += 200;
    } else {
      this.piTagsMarginRight -= 200;
      this.piSearchMarginRight -= 200;
    }

    this.piTagsMarginRightPx = `${this.piTagsMarginRight}px`;
    this.piSearchMarginRightPx = `${this.piSearchMarginRight}px`;
  }

}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.scss'],
  animations: [
    trigger('slide', [
      state('false', style({ transform: 'translateX(0)' })),
      state('true', style({ transform: 'translateX(-215px)' })),
      transition('* => *', animate(200))
    ])
  ]
})
export class NavBannerComponent implements OnInit {
  value: Date;
  showCalendar = true;

  constructor() { }

  @Input() searchActivated = 'false';
  @ViewChild('search', { static: false }) searchField: ElementRef;

  ngOnInit() {
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  toggleSearch() {
    if (this.searchActivated === 'false') {
      this.searchActivated = 'true';
      setTimeout(() => this.searchField.nativeElement.focus(), 300);
    } else {
      this.searchActivated = 'false';
    }
  }

}

import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.scss'],
  animations: [
    trigger('slide', [
      state('false', style({ transform: 'translateX(0)' })),
      state('true', style({ transform: 'translateX(-200px)' })),
      transition('* => *', animate(200))
    ])
  ]
})
export class NavBannerComponent implements OnInit {
  value: Date;

  showCalendar = false;

  yearRange = `2019:${new Date().getFullYear()}`;

  constructor() { }

  @Input() searchActivated = 'false';
  @ViewChild('search', { static: false }) searchField: ElementRef;

  ngOnInit() {
  }

  toggleCalendar(event) {
    if (!event) {
      return;
    }

    if (event === 'icon-click') {
      this.showCalendar = !this.showCalendar;

      return;
    }

    if ('toElement' in event) {
      if ('className' in event.toElement) {
        if (!event.toElement.className.includes('monthpicker')
            && !event.toElement.className.includes('datepicker')) {
          this.showCalendar = !this.showCalendar;

          return;
        }
      }
    }
  }

  toggleSearch() {
    if (this.searchActivated === 'false') {
      this.searchActivated = 'true';
      setTimeout(() => this.searchField.nativeElement.focus(), 300);
    } else {
      this.searchActivated = 'false';
    }
  }

  filterPosts(value: Date) {
    console.log(value);

    setTimeout(() => this.showCalendar = false, 100);
  }

}

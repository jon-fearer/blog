import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
      state('true', style({ transform: 'translateX(-210px)' })),
      transition('* => *', animate(200))
    ])
  ]
})
export class NavBannerComponent implements OnInit {
  @Output() homeEvent = new EventEmitter();

  value: Date;

  showCalendar = false;

  showTags = false;

  yearRange = `2019:${new Date().getFullYear()}`;

  constructor() { }

  @Input() searchActivated = 'false';
  @ViewChild('search', { static: false }) searchField: ElementRef;

  ngOnInit() {
  }

  toggleCalendar(event: any) {
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
            && !event.toElement.className.includes('datepicker')
            && !event.toElement.className.includes('pi-calendar')) {
          this.showCalendar = !this.showCalendar;

          return;
        }
      }
    }
  }

  toggleSearch() {
    if (this.searchActivated === 'false') {
      setTimeout(() => this.searchActivated = 'true', 100);
      setTimeout(() => this.searchField.nativeElement.focus(), 300);
    } else {
      setTimeout(() => this.searchActivated = 'false', 100);
    }
  }

  filterPosts(value: Date) {
    console.log(value);

    setTimeout(() => this.showCalendar = false, 100);
  }

  toggleTags(event: any) {
    if (!event) {
      return;
    }

    if (event === 'icon-click') {
      this.showTags = !this.showTags;

      return;
    }

    if ('toElement' in event) {
      if ('className' in event.toElement) {
        if (event.toElement.className !== 'ui-button-text ui-clickable'
            && event.toElement.className !== 'tag-container'
            && event.toElement.className !== 'pi pi-tags') {
          this.showTags = !this.showTags;

          return;
        }
      }
    }
  }

}

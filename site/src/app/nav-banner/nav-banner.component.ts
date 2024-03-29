import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DeviceDetectorService } from 'ngx-device-detector';

// noinspection JSMethodCanBeStatic
@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.scss'],
  animations: [
    trigger('slide', [
      state('false', style({ transform: 'translateX(0)' })),
      state('true', style({ transform: 'translateX(-210px)' })),
      transition('* => *', animate(200)),
    ]),
  ],
})
export class NavBannerComponent {
  @Output() homeEvent = new EventEmitter();
  @Output() bioEvent = new EventEmitter();
  @Output() filterPostsByMonth = new EventEmitter();
  @Output() filterPostsByTag = new EventEmitter();
  @Output() filterPostsByText = new EventEmitter();
  @Input() searchActivated = 'false';
  @ViewChild('search', { static: false }) searchField: ElementRef;
  value: Date;
  showCalendar = false;
  showTags = false;
  yearRange = `2021:${new Date().getFullYear()}`;

  constructor(private deviceService: DeviceDetectorService) {}

  toggleCalendar(event?: any) {
    if (!event) {
      return;
    }
    if (this.isToggleableCalendarClick(event)) {
      setTimeout(() => this.showCalendar = !this.showCalendar, 100);
    }
  }

  private isToggleableCalendarClick(event?: any) {
    if (event === 'icon-click') {
      return true;
    }
    if (event?.toElement?.className) {
      const className: string = event.toElement.className;
      if (!className.includes('monthpicker') &&
          !className.includes('datepicker') &&
          !className.includes('yearpicker') &&
          !className.includes('pi-calendar')) {
        return true;
      }
      if (className.includes('monthpicker') && this.deviceService.isMobile()) {
        return true;
      }
    }
    return false;
  }

  toggleSearch() {
    if (this.searchActivated === 'false') {
      setTimeout(() => this.searchActivated = 'true', 100);
      setTimeout(() => this.searchField.nativeElement.focus(), 300);
    } else {
      setTimeout(() => this.searchActivated = 'false', 100);
    }
  }

  toggleTags(event?: any) {
    if (!event) {
      return;
    }
    if (this.isToggleableTagsClick(event)) {
      this.showTags = !this.showTags;
    }
  }

  private isToggleableTagsClick(event?: any) {
    if (event === 'icon-click') {
      return true;
    }
    if (event?.toElement?.className) {
      const { className } = event.toElement;
      if (className !== 'ui-button-text ui-clickable' &&
          className !== 'tag-container' &&
          className !== 'pi pi-tags') {
        return true;
      }
    }
    return false;
  }
}

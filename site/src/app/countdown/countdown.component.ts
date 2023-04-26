import { Component } from '@angular/core';
import { getCountdownValue } from './get-countdown-value';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  countdownValue = getCountdownValue();
}

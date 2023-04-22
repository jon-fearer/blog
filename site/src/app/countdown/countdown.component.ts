import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  countdownValue = Math.ceil((Date.parse('2024-02-15T07:00:00Z') - Date.now()) / 86400000);
}

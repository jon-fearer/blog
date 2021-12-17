import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-redirect',
  template: '',
})
export class RedirectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.location.href = environment.puntAnalysisUrl;
  }
}

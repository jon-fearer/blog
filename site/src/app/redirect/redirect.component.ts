import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  template: '',
})
export class RedirectComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.router.url === '/data-bowl') {
      window.location.href = environment.puntAnalysisUrl;
    } else {
      window.location.href = environment.linkedInUrl;
    }
  }
}

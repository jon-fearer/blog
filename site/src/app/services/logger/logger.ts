import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  private buffer: string[] = [];
  private flush = new Subject<string>();

  constructor() {
    this.flush.pipe(debounceTime(5000)).subscribe(() => this.flushBuffer());
  }

  public log(message: string) {
    this.buffer.push(message);
    this.flush.next();
  }

  private flushBuffer() {
    const data = this.buffer.splice(0);
    if (data.length === 0) {
      return;
    }
    console.log(data);
  }
}

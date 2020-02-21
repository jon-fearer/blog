import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PostPreviewService {
  constructor(private http: HttpClient) { }

  getPostMetadata() {
    const url = `https://${environment.contentHostname}/index.json`;

    return this.http.get(url);
  }
}

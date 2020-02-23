import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PostPreviewService {
  constructor(private http: HttpClient) { }

  getPostPreviews() {
    const url = `${environment.contentBasePath}/index.json`;

    return this.http.get(url);
  }
}

export interface IPostPreview {
  title: string,
  path: string,
}

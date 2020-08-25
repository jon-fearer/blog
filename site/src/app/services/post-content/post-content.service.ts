import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostContentService {
  constructor(private http: HttpClient) { }

  getPostContent(path: string) {
    const url = `${environment.contentBasePath}/${path}`;

    return this.http.get(url, {responseType: 'text'});
  }
}

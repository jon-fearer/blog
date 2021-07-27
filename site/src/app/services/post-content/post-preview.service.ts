import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IPostPreview } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostPreviewService {
  constructor(private http: HttpClient) { }

  getPostPreviews(): Observable<IPostPreview[]> {
    const url = `${environment.contentBasePath}/index.json`;
    return this.http.get<IPostPreview[]>(url);
  }
}

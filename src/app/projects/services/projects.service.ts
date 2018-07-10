import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  api_url = 'http://localhost:3000';
  projects_url = `${this.api_url}/projects`;

  getProjetcs(): Observable<any> {
    return this.httpClient.get(this.projects_url);
  }
}

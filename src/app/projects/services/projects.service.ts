import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import {a} from '@angular/core/src/render3';
import {Subject} from 'rxjs/internal/Subject';

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

 // api_url = 'http://localhost:3000';
  api_url ='';
  //projects_url = `${this.api_url}/projects`;
  projects_url = `${this.api_url}projects`;
  private _subject = new Subject<any>();
  // getting the list of projects
  // TODO :maybe we should handel all of the data parsing here and returning it to component.
  getProjetcs(): Observable<any> {
    return this.httpClient.get(this.projects_url);
  }
  // getting single project from DB
  // TODO :maybe we should handel all of the data [arsing here and returning it to component.
  getProjectById(projectId): Observable <any> {
    return this.httpClient.get(this.projects_url + '/projectDetails/' + projectId);
  }

  // getting associated user projects from DB
  // TODO :maybe we should handel all of the data [arsing here and returning it to component.
  getinvestorAssociatedProjects(projects): Observable <any> {
    return this.httpClient.get(this.projects_url + '/associatedProjects/', {params: {projects: projects}});
  }

  newEvent(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }
}

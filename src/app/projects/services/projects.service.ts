import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import {a} from '@angular/core/src/render3';

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  api_url = 'http://localhost:3000';
  projects_url = `${this.api_url}/projects`;

  // getting the list of projects
  // TODO :maybe we should handel all of the data [arsing here and returning it to component.
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
}

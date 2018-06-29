import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs';



@Injectable()
export class InvestorsService {
  api_url = 'http://localhost:3000';
  investors_url = `${this.api_url}/Investor`;
  constructor(private httpClient: HttpClient) {
  }


  getInvestors(): Observable<any> {
    return this.httpClient.get(this.investors_url + '/investors');
  }

  getSingleInvestorById(id): Observable<any> {
    return this.httpClient.get(this.investors_url + '/investor/' + id);
  }
}

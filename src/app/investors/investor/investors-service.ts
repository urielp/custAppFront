import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs';
import Investor from '../../models/investor.model';



@Injectable()
export class InvestorsService {

  api_url = 'http://localhost:3000';
  investors_url = `${this.api_url}/Investor`;
  private _investorsList: Investor[];

  constructor(private httpClient: HttpClient) {
  }
  getListByPage(page: number): Observable<any> {
    return this.httpClient.get(this.investors_url + '/investors/' + page);
  }

  getInvestors(): Observable<any> {
    return this.httpClient.get(this.investors_url + '/investors');
  }

  getSingleInvestorById(id): Observable<any> {
    return this.httpClient.get(this.investors_url + '/investor/' + id);
  }
  addInvestor(investor: Investor): Observable <any> {
    return this.httpClient.post(this.investors_url + '/addInvestor/', investor);
  }

  get investorsList(): Investor[] {
    return this._investorsList;
  }

  set investorsList(value: Investor[]) {
    this._investorsList = value;
  }
}

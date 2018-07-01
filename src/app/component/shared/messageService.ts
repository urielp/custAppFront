import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/internal/Observable';
import {Subject} from 'rxjs/internal/Subject';


@Injectable()
export class MessageService {
  private _listener = new Subject<any>();

  listen(): Observable<any> {
    return this._listener.asObservable();
  }
  filter(filterBy: string) {
    this._listener.next(filterBy);
  }
}

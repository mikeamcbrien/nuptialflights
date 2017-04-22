import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
  }

  public getDataFlights() {
    return this.http.get('../assets/flights.json').map(data => data.json())

  }

}

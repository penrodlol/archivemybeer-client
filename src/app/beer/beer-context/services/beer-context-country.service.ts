import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IBeerCountry {
  name: string;
}

@Injectable()
export class BeerContextCountryService {

  constructor(private http: HttpClient) { }

  get countries$(): Observable<string[]> {
    return this.http
      .get<IBeerCountry[]>('assets/json/countries.json')
      .pipe(map(countries => countries.map(({ name }) => name)));
  }
}

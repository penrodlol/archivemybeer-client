import { Injectable } from '@angular/core';
import { IBeer } from '@models/beer.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class BeerContextState {
  private beerContextSubject = new BehaviorSubject<IBeer>(null);
  readonly beerContext$ = this.beerContextSubject.asObservable();

  update = (beer: IBeer) => this.beerContextSubject.next(beer);
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class BeerContextEditingState {
  private editingSubject = new BehaviorSubject<boolean>(false);
  readonly editing$ = this.editingSubject.asObservable();

  update = () => this.editingSubject.next(!this.editingSubject.value);
}

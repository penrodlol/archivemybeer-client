import { Component, Input } from '@angular/core';

@Component({
  selector: 'amb-beers-list-content-loader',
  templateUrl: './beers-list-content-loader.component.html',
})
export class BeersListContentLoaderComponent {
  @Input() columns: number;

  calcPosition = (startingPoistion: number, buffer: number) => startingPoistion + buffer;
}

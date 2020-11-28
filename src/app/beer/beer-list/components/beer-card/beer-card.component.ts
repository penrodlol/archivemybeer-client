import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBeer } from '@models/beer.model';
import { BeerContextState } from '@beer/state/beer-context.state';

@Component({
  selector: 'amb-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent {
  @Input() beer: IBeer;

  constructor(
    private beerContextState: BeerContextState,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  onBeerSelected(): void {
    this.beerContextState.update(this.beer);
    this.router.navigate([this.beer._id], { relativeTo: this.route });
  }
}

import { Component, OnInit } from '@angular/core';
import { GetBeersGQL } from '@gql/remote/beers.gql';
import { addMany } from './app.state';
import { pluck, take } from 'rxjs/operators';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private getBeersGQL: GetBeersGQL,
  ) { }

  ngOnInit(): void {
    this.getBeersGQL
      .fetch()
      .pipe(
        pluck('data', 'beers'),
        take(1)
      )
      .subscribe(({ collection, finished }) => {
        addMany({ collection, finished });
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { GetBeersGQL } from './gql/remote/beers.gql';
import { beersState } from './graphql.module';
import { take } from 'rxjs/operators';

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
      .pipe(take(1))
      .subscribe(ref => {
        beersState({
          collection: ref.data.beers.collection,
          finished: ref.data.beers.finished,
          index: 20,
        });
      });
  }

}

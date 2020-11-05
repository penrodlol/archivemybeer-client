import { Injectable } from '@angular/core';
import { NxBreakpoints, NxViewportService } from '@aposin/ng-aquila/utils';
import { combineLatest, from, Observable } from 'rxjs';
import { first, pluck, switchMap, take } from 'rxjs/operators';

@Injectable()
export class BeersListColumnsService {
  private readonly COLUMN_SIZE = ['12', '6', '4', '3'];

  constructor(private viewport: NxViewportService) { }

  get nxCol$(): Observable<string> {
    return combineLatest([
      this.viewport.max(NxBreakpoints.BREAKPOINT_LARGE),
      this.viewport.max(NxBreakpoints.BREAKPOINT_XLARGE),
      this.viewport.max(NxBreakpoints.BREAKPOINT_2XLARGE),
      this.viewport.min(NxBreakpoints.BREAKPOINT_3XLARGE),
    ])
    .pipe(
      switchMap(breakpoints => from(breakpoints.map(breakpoint => ({
          isActive: breakpoint,
          columnSize: this.COLUMN_SIZE[breakpoints.indexOf(breakpoint)],
        })
      ))),
      first(breakpoint => breakpoint.isActive),
      pluck('columnSize'),
      take(1),
    );
  }
}

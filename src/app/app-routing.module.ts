import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'beers' },
  { path: 'beers', loadChildren: () => import('@beer/beer-list/beer-list.module').then(m => m.BeerListModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { scrollPositionRestoration: 'top' }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

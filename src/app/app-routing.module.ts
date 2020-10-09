import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'beers' },
  { path: 'beers', loadChildren: () => import('../app/beer/beer.module').then(m => m.BeerModule) },
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

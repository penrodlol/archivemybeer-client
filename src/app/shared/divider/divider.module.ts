import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'amb-divider',
  template: `
    <hr class="divider nx-margin-x-s margin-box">
  `,
  styles: [`
    .divider {
      width: 1px;
      display: inline;
    }
  `]
})
export class DividerComponent { }

@NgModule({
  declarations: [DividerComponent],
  exports: [DividerComponent],
})
export class DividerModule { }

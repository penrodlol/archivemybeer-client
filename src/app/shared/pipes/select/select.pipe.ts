import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'select' })
export class SelectPipe implements PipeTransform {
  transform(object: any, field: string): any {
    return object?.data?.state?.[field];
  }
}

@NgModule({
  declarations: [SelectPipe],
  exports: [SelectPipe],
})
export class SelectPipeModule { }

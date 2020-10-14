import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'select' })
export class SelectPipe implements PipeTransform {
  transform(object: any, field: string): any {
    console.log(object);
    return object?.data?.state?.[field];
  }
}

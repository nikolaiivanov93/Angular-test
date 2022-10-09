import { Pipe, PipeTransform } from '@angular/core';
import { Path } from '../models/path';

@Pipe({
  name: 'filterPath'
})
export class FilterPathPipe implements PipeTransform {

  transform(path: Path): string {
    return null;
  }

}

import { Injectable } from '@angular/core';
import { Path } from '../models/path';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  path: Path[] = [{link: '/', title: 'Главная'}];

  setPath(link: string, title: string):void {
    if (!this.path.some(item => item.title == title)) {
      this.path.push({link, title});
    }
  }
  changePath(index: number): void {
    if (index < this.path.length) {
      this.path.splice(index + 1, this.path.length - index + 1);
    }
  }
}

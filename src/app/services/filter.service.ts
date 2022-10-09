import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterBooks$ = new BehaviorSubject('');
  filterAuthor$ = new BehaviorSubject('all');

  filterBooks(search: string): void {
    this.filterBooks$.next(search);
  }
  filterAuthor(name: string): void {
    this.filterAuthor$.next(name);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {BehaviorSubject, catchError, delay, Observable, retry, Subject, tap, throwError} from 'rxjs';
import { Books } from '../models/books';
import { Author } from '../models/authors';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // filter$: Observable<string> = 'all';
  constructor(
    private http: HttpClient,
  ) { }

  books$ = new Subject<Books[]>();
  filterBooks$ = new BehaviorSubject('');
  filterAuthor$ = new BehaviorSubject('all');

  getAllBooks(): Observable<Books[]> {
    this.http.get<Books[]>('http://localhost:3001/books').subscribe(data => {
      this.books$.next(data);
    })
    return this.books$;
  }
  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:3001/authors')
  }
  filterBooks(search: string) {
    this.filterBooks$.next(search);
  }
  filterAuthor(name: string) {
    this.filterAuthor$.next(name);
  }
}

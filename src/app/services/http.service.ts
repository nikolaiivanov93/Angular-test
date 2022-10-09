import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {BehaviorSubject, catchError, delay, Observable, retry, Subject, filter, tap, throwError} from 'rxjs';
import { Books } from '../models/books';
import { Author } from '../models/authors';
import { PathService } from './path.service';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // filter$: Observable<string> = 'all';
  constructor(
    private http: HttpClient,
    public pathService: PathService
  ) { }

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>('http://localhost:3001/books')
  }
  setBook(book: any): Observable<Books> {
    return this.http.post<Books>('http://localhost:3001/books', book)
  }
  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:3001/authors')
  }
  setAuthor(author: any): Observable<Author> {
    return this.http.post<Author>('http://localhost:3001/authors', author);
  }
}

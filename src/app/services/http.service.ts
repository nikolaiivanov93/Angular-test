import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs';
import { Books } from '../models/books';
import { Authors } from '../models/authors';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient,
  ) { }

  books: Books[] = []

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>('http://localhost:3001/books')
  }
  getAllAuthors(): Observable<Authors[]> {
    return this.http.get<Authors[]>('http://localhost:3001/authors')
  }
}

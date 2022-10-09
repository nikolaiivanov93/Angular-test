import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { BooksService } from './http.service';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Books[] = [];
  book: Books; 

  constructor(
    public booksService: BooksService,
    public pathService: PathService
  ) {}

  setBooks(books: Books[]) {
    this.books = books;
  }
  getBooks(): Books[] {
    return this.books;
  }
  getBook(id: number) {
    return new Promise<Books>((resolve, reject) => {
      if (this.books.length !== 0) {
        
        const book = this.books.filter(book => book.id === id);
        this.book = book[0];
        this.pathService.setPath(`/detail/${this.book.id}`, this.book.title);
        resolve(this.book);
      } else {
        this.booksService.getAllBooks().subscribe(data => {
          const book = data.filter(book => book.id === id);
          this.book = book[0];
          this.pathService.setPath(`/detail/${this.book.id}`, this.book.title);
          resolve(this.book);
        })
      }
    })
    
  }
}

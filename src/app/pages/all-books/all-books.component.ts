import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from 'src/app/services/http.service';
import { FilterService } from 'src/app/services/filter.service';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { Books } from 'src/app/models/books';
import { Author } from 'src/app/models/authors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  // providers: [BooksService]
})

export class AllBooksComponent implements OnInit {

  // books$ = this.store.select(selectBooks);
  books = this.bookService.getBooks();
  authors = this.authorService.getAuthors();
  title: string = '';
  showFilterAuthors: boolean = false;
  activeAuthor: number = 0;
  subscribtion1: Subscription
  subscribtion2: Subscription
 
  constructor(
    public booksService: BooksService,
    public bookService: BookService,
    public filterService: FilterService,
    public authorService: AuthorService,
  ) {

  }

  ngOnInit(): void {
    if (this.books.length === 0) {
      this.subscribtion1 = this.booksService.getAllBooks().subscribe(data => {
        this.books = data;
        this.bookService.setBooks(this.books);
        // this.books.forEach((book, i) => {
        //   this.books[i].title = book.title.length > 26 ? book.title.slice(0, 26) + '...' : book.title;
        // })
      });
    }
    
    if (this.authors.length === 0) {
      this.subscribtion2 = this.booksService.getAllAuthors().subscribe((data: Author[]) => {
        this.authorService.setAuthors(data);
        this.authors = data;
      })
    }
  }

  OnDestroy(): void {
    this.subscribtion1.unsubscribe();
    this.subscribtion2.unsubscribe();
  }

  filter(author: string, id: number): void {
    this.activeAuthor = id;
    this.filterService.filterAuthor(author);
  }
}

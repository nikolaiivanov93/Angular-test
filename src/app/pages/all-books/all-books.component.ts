import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/http.service';
import { Books } from 'src/app/models/books';
import { Author } from 'src/app/models/authors';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  // providers: [BooksService]
})
export class AllBooksComponent implements OnInit {

  books: Books[] = [];
  authors: Author[] = [];
  title: string = '';
  showFilterAuthors: boolean = false;
 
  constructor(
    public bookService: BooksService,
  ) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data: Books[]) => {
      this.books = data;
      this.books.forEach((book, i) => {
        this.books[i].title = book.title.length > 26 ? book.title.slice(0, 26) + '...' : book.title;
      })
    })
    this.bookService.getAllAuthors().subscribe((data: Author[]) => {
      this.authors = data;
      console.log(this.authors);
    })
    // console.log(this.bookService.filter$);
  }

  filter(author: string): void {
    this.bookService.filterAuthor(author);
  }
}

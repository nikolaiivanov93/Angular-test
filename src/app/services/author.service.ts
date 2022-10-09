import { Injectable } from '@angular/core';
import { Author } from '../models/authors';
import { BooksService } from './http.service';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authors: Author[] = [];
  author: Author;

  constructor(
    public bookService: BooksService,
    public pathService: PathService
  ) { }

  setAuthors(authors: Author[]): void {
    this.authors = authors;
  }

  getAuthors(): Author[] {
    return this.authors;
  }

  getAuthor(firstName: string, lastName: string) {
    console.log(firstName, lastName);
    return new Promise<Author>((resolve, reject) => {
      if (this.authors.length !== 0) {
        
        const author = this.authors.filter(author => author.firstName === firstName && author.lastName === lastName);
        this.author = author[0];
        this.pathService.setPath(`/author/${this.author.firstName} ${this.author.lastName}`, `${this.author.firstName} ${this.author.lastName}`);
        resolve(this.author);
      } else {
        this.bookService.getAllAuthors().subscribe(data => {
          const author = data.filter(author => author.firstName === firstName && author.lastName === lastName);
          this.author = author[0];
          this.pathService.setPath(`/author/${this.author.firstName} ${this.author.lastName}`, `${this.author.firstName} ${this.author.lastName}`);
          resolve(this.author);
        })
      }
    })
  }
}

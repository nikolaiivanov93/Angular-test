import { Pipe, PipeTransform } from '@angular/core';
import { Books } from '../models/books';

@Pipe({
  name: 'filterAuthor'
})
export class FilterAuthorPipe implements PipeTransform {

  transform(books: Books[], search: string): Books[] {
    if (search === 'all') return books;
    return books.filter(book => book.author.includes(search));
  }

}

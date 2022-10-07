import { Pipe, PipeTransform } from '@angular/core';
import { Books } from '../models/books';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: Books[], search: string): Books[] {
    if (search.length === 0) return books;
    return books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
  }

}

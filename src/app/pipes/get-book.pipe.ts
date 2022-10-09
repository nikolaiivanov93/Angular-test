import { Pipe, PipeTransform } from '@angular/core';
import { Books } from '../models/books';

@Pipe({
  name: 'getBook'
})
export class GetBookPipe implements PipeTransform {

  transform(books: Books[], id: number): Books[] {
    return books.filter(book => book.id === id);
  }

}

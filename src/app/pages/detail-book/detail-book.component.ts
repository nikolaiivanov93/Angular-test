import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Books } from 'src/app/models/books';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  book: Books;

  constructor(
    private route: ActivatedRoute,
    public bService: BookService,
    public bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    // this.bService.book$.subscribe(data => this.book = data);
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id)
      .then(res => this.book = res);
    // this.store.dispatch(getBook({id}));
    // this.store.select(selectBooks).subscribe(data => {
    //   const book = data.filter(item => item.id === id);
    //   this.bService.setBook(book[0]);
    // });
  }
}

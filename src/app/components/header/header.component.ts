import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  term: string = '';

  constructor(
    public bookService: BooksService
  ) { }

  ngOnInit(): void {
  }

  onTermChange(): void {
    // console.log(this.term);
    this.bookService.filterBooks(this.term);
  }

}

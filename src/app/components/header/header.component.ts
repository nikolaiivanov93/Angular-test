import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/services/http.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  term: string = '';

  constructor(
    public bookService: BooksService,
    public filterService: FilterService
  ) { }

  ngOnInit(): void {
  }

  onTermChange(): void {
    // console.log(this.term);
    this.filterService.filterBooks(this.term);
  }

}

import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/http.service';
import { PathService } from 'src/app/services/path.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    public bookService: BooksService,
    public pathService: PathService
  ) { }

  ngOnInit(): void {
    console.log(this.pathService.path);
  }

  changePath(index: number) {
    this.pathService.changePath(index);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/authors';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  author: Author;

  constructor(
    private route: ActivatedRoute,
    public authorService: AuthorService

  ) { }

  ngOnInit(): void {
    this.getAuthor();
  }
  getAuthor() {
    const id = this.route.snapshot.paramMap.get('id');
    const arr = id?.split(' ');
    console.log(arr);

    this.authorService.getAuthor(arr![0], arr![1])
      .then(res => this.author = res);
  }

}

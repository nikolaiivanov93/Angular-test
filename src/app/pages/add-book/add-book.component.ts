import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/app/services/path.service';
import { BooksService } from 'src/app/services/http.service';
import { UniqueIdService } from 'src/app/services/unique-id.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Books } from 'src/app/models/books';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  myForm: FormGroup
  requestDone: boolean = false;

  constructor(
    public pathService: PathService,
    public booksService: BooksService,
    public uniqueIdService: UniqueIdService,
    private router: Router
  ) {
    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(),
      language: new FormControl('', Validators.required),
      pages: new FormControl('', Validators.required),
      coverType: new FormControl(),
      size: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      yearPublisher: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.pathService.setPath('/add-book', 'Добавить книгу');
  }

  submit() {
    const controls = this.myForm.controls;
    const book: Books = {
      id: this.uniqueIdService.uniqueID(),
      title: controls["title"].value,
      description: controls["description"].value,
      discount: '',
      picture: '',
      language: controls["language"].value,
      pages: controls["pages"].value,
      coverType: controls["coverType"].value,
      size: controls["size"].value,
      weight: controls["weight"].value,
      publisher: controls["publisher"].value,
      yearPublisher: controls["yearPublisher"].value,
      isbn: controls["isbn"].value,
      hidden: false,
      filter: '',
      author: controls["author"].value
    }
    const subscribtion = this.booksService.setBook(book).subscribe(res => {
      this.requestDone = true;

      setTimeout(() => {
        subscribtion.unsubscribe();
        this.requestDone = false;
        this.router.navigate(['']);
      }, 2000)
    })
  }

}

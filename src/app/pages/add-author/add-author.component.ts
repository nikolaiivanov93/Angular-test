import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/app/services/path.service';
import { BooksService } from 'src/app/services/http.service';
import { UniqueIdService } from 'src/app/services/unique-id.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/models/authors';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  myForm: FormGroup
  requestDone: boolean = false;

  constructor(
    public pathService: PathService,
    public booksService: BooksService,
    public uniqueIdService: UniqueIdService,
    private router: Router
  ) { 
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      middleName: new FormControl(),
      description: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.pathService.setPath('/add-author', 'Добавить атора');
  }

  submit() {
    const controls = this.myForm.controls;
    const author: Author = {
      id: this.uniqueIdService.uniqueID(),
      firstName: controls["firstName"].value,
      lastName: controls["lastName"].value,
      middleName: controls["middleName"].value,
      description: controls["description"].value !== '' ? controls["description"].value : `Извините, в данный момент информаци о ${controls["firstName"].value} еще собирается`,
      photo: "none"
    }
    const subscribtion = this.booksService.setAuthor(author).subscribe(res => {
      this.requestDone = true;

      setTimeout(() => {
        subscribtion.unsubscribe();
        this.requestDone = false;
        this.router.navigate(['']);
      }, 2000)
    })
  }

}

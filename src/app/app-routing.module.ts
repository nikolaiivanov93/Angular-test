import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import { DetailBookComponent } from './pages/detail-book/detail-book.component';
import { AuthorComponent } from './pages/author/author.component';
import { AddAuthorComponent } from './pages/add-author/add-author.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

const routes: Routes = [
  {path: '', component: AllBooksComponent},
  {path: 'detail/:id', component: DetailBookComponent},
  {path: 'author/:id', component: AuthorComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'add-book', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

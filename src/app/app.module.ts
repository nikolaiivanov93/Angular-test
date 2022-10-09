import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FilterBooksPipe } from './pipes/filter-books.pipe';
import { FilterAuthorPipe } from './pipes/filter-author.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DetailBookComponent } from './pages/detail-book/detail-book.component';
import { environment } from '../environments/environment';
import { GetBookPipe } from './pipes/get-book.pipe';
import { AuthorComponent } from './pages/author/author.component';
import { ImageNotFoundComponent } from './components/image-not-found/image-not-found.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { AddAuthorComponent } from './pages/add-author/add-author.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    HeaderComponent,
    FilterBooksPipe,
    FilterAuthorPipe,
    NavigationComponent,
    DetailBookComponent,
    GetBookPipe,
    AuthorComponent,
    ImageNotFoundComponent,
    AddBookComponent,
    AddAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

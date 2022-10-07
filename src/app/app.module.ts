import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FilterBooksPipe } from './pipes/filter-books.pipe';
import { FilterAuthorPipe } from './pipes/filter-author.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    HeaderComponent,
    FilterBooksPipe,
    FilterAuthorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

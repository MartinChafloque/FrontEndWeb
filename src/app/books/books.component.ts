import { Component, OnInit } from '@angular/core';
import { Book } from './books';
import { BookService } from '../book.service';
import { Editorial } from '../editorial/editorial';
import { EditorialService } from '../editorial.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService,
              private editorialService: EditorialService) { }

  ngOnInit(): void {
    this.bookService.searchAllBooks();
    this.bookService.onResults().subscribe(
      results => {
        this.books = results;
        this.fillBooksEditorial();
      }
    )                           
  }

  searchBooksByEditorial(book: Book){
    this.bookService.searchByEditorialId(book.editorialId.id)
  }

  fillBooksEditorial(){
     for (const book of this.books){
        this.editorialService.searchById(+book.editorialId).subscribe(
          result => {
            book.editorialId = result           
          }
        )
     }
  }
}
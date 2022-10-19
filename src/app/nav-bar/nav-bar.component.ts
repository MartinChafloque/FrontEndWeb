import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../books/books';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  result: string ='';
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  search(searchForm: NgForm){
    if(searchForm.value.filter === ''){
      alert("Inserte algo en la búsqueda") 
    }
    else{
      this.bookService.searchByName(searchForm.value.filter);
    }
  }

  restartBooks(): void{
    this.bookService.searchAllBooks();
    this.result = '';
  }
}
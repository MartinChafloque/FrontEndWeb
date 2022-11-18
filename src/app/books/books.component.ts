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

  maxPagina: number = 10
  paginaActual: number = 0
  numPaginas: number = 0
  botonesPag: Number[] = []
  books: Book[] = [];
  filterBooks: Book[] = [];

  constructor(private bookService: BookService,
              private editorialService: EditorialService) { }

  ngOnInit(): void {
    this.bookService.searchAllBooks();
    this.bookService.onResults().subscribe(
      results => {
        this.books = results;
        this.numPaginas = Math.ceil(this.books.length / this.maxPagina)
        this.botonesPag = Array(this.numPaginas).fill(0).map((_, i)=>i+1)
        this.fillBooksEditorial();
      }
    )                           
  }

  /** Busca libros dado un id de editorial
   * 
   * @param book 
   */
  searchBooksByEditorial(book: Book){
    this.bookService.searchByEditorialId(book.editorialId.id)
  }

  /** Filtra los libros dado una editorial
   * 
   */
  fillBooksEditorial(){
     for (const book of this.books){
        this.editorialService.searchById(+book.editorialId).subscribe(
          result => {
            book.editorialId = result           
          }
        )
     }
     this.filterBooks = this.books.filter((_,i)=>i>=0 && i<this.maxPagina)
  }

  /** Elimina un libro dado un id
   * 
   * @param id 
   */
  deleteBookById(id: number){
      this.bookService.deleteBookById(id).subscribe(
        result => {
          console.log(result)
          this.ngOnInit()
        }
      )
  }


  /** Cambia de página dado un indice
   * 
   * @param index 
   */
  changePage(index: number){
    this.paginaActual = index - 1
    const start = (index - 1) * this.maxPagina
    const end = start + this.maxPagina
    this.filterBooks = this.books.filter((_,i)=>i>=start && i<end)
  }
}
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BookService } from './book.service';
import { LoginService } from './login.service';


describe('BookService', () => {
  let service: BookService;
  let login: LoginService;
  let httpClientSpy: { post: jasmine.Spy, put: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new BookService(httpClientSpy as any, login);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Retorna libro nuevo cuando se hace el crear libro de forma correcta', () =>{

    const bookCredentials = {
      name: 'Harry Potter',
      description: 'Una nueva aventura',
      imageUrl: 'foto.png',
      cantidad: 2,
      editorialId: 1
    }

    const bookResult = {
      name: 'Harry Potter',
      description: 'Una nueva aventura',
      imageUrl: 'foto.png',
      cantidad: 2,
      editorialId: 1
    }
    
    httpClientSpy.post.and.returnValue(of(bookResult));

    const {name, description, imageUrl, cantidad, editorialId} = bookCredentials

    service.createBook(name, editorialId, description, imageUrl, +cantidad).subscribe(result => {
      expect(result).toEqual(bookResult)
    })
  });

  it('Retorna libro nuevo cuando se hace el modificar libro de forma correcta', () =>{

    const bookCredentials = {
      name: 'Harry Potter',
      description: 'Una nueva aventura',
      imageUrl: 'foto.png',
      cantidad: 2,
      editorialId: 1
    }

    const {name, description, imageUrl, cantidad, editorialId} = bookCredentials

    expect(service.updateBook(1, name, editorialId, description, imageUrl, +cantidad)).toBeTruthy()
  });

  it('Retorna el libro dado ese id', () =>{
    service.searchById(1).subscribe(result =>{
      expect(result.name).toBe('El Siconalista')
    })
  });

  it('Retorna el libro dado un nombre', () =>{
    expect(service.searchByName('Hola')).toBeFalsy()
  });

  it('Elimina el libro dado un id', () =>{
    service.deleteBookById(1).subscribe(result =>{
      expect(result.name).toBe('El Siconalista')
    })
  });

  it('Retorna el libro dado un editorial id', () =>{
    expect(service.searchByEditorialId(5)).toBeFalsy()
  });

  it('should be created', () => {
    service.searchAllBooks()
  });
});
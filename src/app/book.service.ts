import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "./books/books";
import { LoginService } from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    
    searchResults = new BehaviorSubject<Array<Book>>([]);
    constructor(private http: HttpClient,
        private login: LoginService){ }

    /** Busca todos los libros
     * 
     */
    searchAllBooks(){
        this.http.get<Book[]>("http://localhost:8080/books").subscribe(
            results => {
                this.searchResults.next(results)
            }
        );
    }

    /** Busca un libro dado un nombre
     * 
     * @param name 
     */
    searchByName(name: string){
           this.http.get<Book[]>("http://localhost:8080/book/" + name).subscribe(
            results => this.searchResults.next(results)
           );
    }


    /** Busca un libro dado un id
     * 
     * @param id 
     * @returns un observable
     */ 
    searchById(id: number):Observable<any>{
        return this.http.get<Book>("http://localhost:8080/books/" + id)
    }

    /** Busca un libro dado un id de editorial
     * 
     * @param id 
     */  
    searchByEditorialId(id: number){
        this.http.get<Book[]>("http://localhost:8080/books/editorial/" + id).subscribe(
            results => this.searchResults.next(results)
           );
    }

    /** Crea un nuevo libro
     * 
     * @param name 
     * @param editorialId 
     * @param descripcion 
     * @param url 
     * @param cantidad 
     * @returns un observable
     */
    createBook(name:string, editorialId: number, descripcion: string, url: string, cantidad: number): Observable<any>{
        return this.http.post("http://localhost:8080/books/", {
            name: name,
            description: descripcion,
            imageUrl: url,
            cantidad: cantidad,
            editorialId: editorialId
        },
        {headers: {
            "Authorization": this.login.getToken()
        }})
    }

    /** Modifica un libro
     * 
     * @param id 
     * @param name 
     * @param editorialId 
     * @param descripcion 
     * @param url 
     * @param cantidad 
     * @returns el libro modificado
     */   
    updateBook(id: number, name:string, editorialId: number, descripcion: string, url: string, cantidad: number){
        return this.http.put("http://localhost:8080/books/" + id, {
            name: name,
            description: descripcion,
            imageUrl: url,
            cantidad: cantidad,
            editorialId: editorialId
        },
        {headers: {
            "Authorization": this.login.getToken()
        }}) 
    }

    /** Elimina un libro dado un id
     * 
     * @param id 
     * @returns el libro eliminado
     */
    deleteBookById(id: number):Observable<Book>{
        return this.http.delete<Book>("http://localhost:8080/books/" + id, {headers: {
            "Authorization": this.login.getToken()
        }})
    } 

    /** Vuelve la lista de resultados en un observable
     * 
     * @returns un observable
     */  
    onResults(){
        return this.searchResults.asObservable();
    }
}
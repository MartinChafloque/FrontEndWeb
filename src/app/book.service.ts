import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "./books/books";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    
    searchResults = new BehaviorSubject<Array<Book>>([]);
    constructor(private http: HttpClient){ }

    searchAllBooks(){
        this.http.get<Book[]>("http://localhost:8080/books").subscribe(
            results => {
                this.searchResults.next(results)
            }
        );
    }

    searchByName(name: string){
           this.http.get<Book[]>("http://localHost:8080/book/" + name).subscribe(
            results => this.searchResults.next(results)
           );
    }

    searchByEditorialId(id: number){
        this.http.get<Book[]>("http://localHost:8080/books/editorial/" + id).subscribe(
            results => this.searchResults.next(results)
           );
    }

    onResults(){
        return this.searchResults.asObservable();
    }
}
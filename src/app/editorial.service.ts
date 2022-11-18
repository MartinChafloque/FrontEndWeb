import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import {Editorial} from "./editorial/editorial"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EditorialService {

    constructor(private http: HttpClient){ }

    /** Busca una editorial por id
     * 
     * @param id 
     * @returns un observable de tipo editorial
     */
    searchById(id: number): Observable<Editorial>{
       return this.http.get<Editorial>("http://localHost:8081/editorials/" + id)
 }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http: HttpClient,
              private cookies: CookieService) { }

  /** Hace el login dado un usuario y una contraseña
   * 
   * @param user 
   * @param password 
   * @returns un observable
   */            
  login(user: string, password: string): Observable<any> {
      const headers = new HttpHeaders()
      const body = JSON.stringify({})
      const params = new HttpParams()
        .set('user', user)
        .set('password', password)
      return this.http.post("http://localhost:8089/login", body, {
                            params: params
                            });
  }

  /** Añade el token
   * 
   * @param token 
   */
  setToken(token: string) {
    this.cookies.set("token", token);
  }

  /** Recupera el token
   * 
   * @returns el token
   */
  getToken() {
    return this.cookies.get("token");
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { LoginService } from './login.service';
import { User } from './users/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  searchResults = new BehaviorSubject<Array<User>>([]);
  constructor(private http: HttpClient,
              private login: LoginService) { }

  /** Busca todos los usuarios
   * 
   */            
  searchAllUsers(){
    this.http.get<User[]>("http://localhost:8082/users", {headers: {
      "Authorization": this.login.getToken()
  }}).subscribe(
        results => {
            this.searchResults.next(results)
        }
    );
  }

  /** Busca un usuario dado un username
   * 
   * @param username 
   * @returns un observable
   */
  searchByUsername(username: string):Observable<any>{
    return this.http.get<User>("http://localhost:8082/users/" + username, {
      headers: {
        "Authorization": this.login.getToken()
      }
    })
}

  /** Crea un nuevo usuario
   * 
   * @param username 
   * @param contrasenia 
   * @param nombre 
   * @param apellido 
   * @param fechaNacimiento 
   * @param cargo 
   * @param activo 
   * @returns un observable
   */
  createUser(username:string, contrasenia: string, nombre: string, apellido: string, fechaNacimiento: Date, cargo: string, activo: boolean): Observable<any>{
    return this.http.post("http://localhost:8082/users/", {
        username: username,
        contrasenia: contrasenia,
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        cargo: cargo,
        activo: activo
    },
    {headers: {
        "Authorization": this.login.getToken()
    }})
}
  
  /** Actualiza un usuario dado su username
   * 
   * @param username 
   * @param usuario 
   * @param nombre 
   * @param apellido 
   * @param fechaNacimiento 
   * @param cargo 
   * @param activo 
   * @returns un observable
   */
  updateUser(username:string, usuario: string, nombre: string, apellido: string, fechaNacimiento: Date, cargo: string, activo: boolean): Observable<any>{
    return this.http.put("http://localhost:8082/users/" + username, {
      username: usuario,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
      cargo: cargo,
      activo: activo
  },
  {headers: {
      "Authorization": this.login.getToken()
  }})
}

  /** Elimna un usuario dado un username
   * 
   * @param username 
   * @returns un observable de tipo usuario
   */
  deleteUserByUsername(username: string):Observable<User>{
    return this.http.delete<User>("http://localhost:8082/users/" + username, {headers: {
        "Authorization": this.login.getToken()
    }})
} 
  
  /** Vuelve la lista de resultados a un observable
   * 
   * @returns un observable
   */
  onResults(){
    return this.searchResults.asObservable();
  }
}
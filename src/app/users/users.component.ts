import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  maxPagina: number = 10
  paginaActual: number = 0
  numPaginas: number = 0
  botonesPag: Number[] = []
  users: User[]=[]
  filterUsers: User[]=[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.searchAllUsers();
    this.userService.onResults().subscribe(
      results => {
        this.users = results;
        this.numPaginas = Math.ceil(this.users.length / this.maxPagina)
        this.botonesPag = Array(this.numPaginas).fill(0).map((_, i)=>i+1)
        this.filterUsers = this.users.filter((_,i)=>i>=0 && i<this.maxPagina)
      }
    )
  }

  /** Elimina un usuario dado un username
   * 
   * @param username 
   */
  deleteUserByUsername(username: string){
    this.userService.deleteUserByUsername(username).subscribe(
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
    this.filterUsers = this.users.filter((_,i)=>i>=start && i<end)
  }
}
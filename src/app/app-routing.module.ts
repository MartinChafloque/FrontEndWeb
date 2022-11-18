import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component'
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginComponent } from './login/login.component'
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
                        { path: '', component: BooksComponent },
                        { path: 'login', component: LoginComponent },
                        {path: 'crearLibro', component: CrearLibroComponent},
                        {path: 'modificarLibro/:id', component: ModificarLibroComponent},
                        {path: 'users', component: UsersComponent},
                        {path: 'crearUsuario', component: CrearUsuarioComponent},
                        {path: 'modificarUsuario/:username', component: ModificarUsuarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

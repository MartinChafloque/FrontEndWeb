import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditorialComponent } from './editorial/editorial.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';
import { UsersComponent } from './users/users.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    EditorialComponent,
    CrearLibroComponent,
    ModificarLibroComponent,
    UsersComponent,
    ModificarUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

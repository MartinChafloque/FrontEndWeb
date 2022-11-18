import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoginService } from './login.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let login: LoginService;
  let httpClientSpy: { post: jasmine.Spy,
                       get: jasmine.Spy };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new UserService(httpClientSpy as any, login);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Retorna usuario nuevo cuando se hace el crear usuario de forma correcta', () =>{

    const userCredentials = {
      username: 'Isabela01',
      contrasenia: 'hola123',
      nombre: 'Isabela',
      apellido: 'Jimenez',
      fechaNacimiento: '01/01/2000',
      cargo: 'Administrador',
      activo: true
    }

    const userResult = {
      username: 'Isabela01',
      contrasenia: 'hola123',
      nombre: 'Isabela',
      apellido: 'Jimenez',
      fechaNacimiento: '01/01/2000',
      cargo: 'Administrador',
      activo: true
    }
    
    httpClientSpy.post.and.returnValue(of(userResult));

    const {username, contrasenia, nombre, apellido, fechaNacimiento, cargo, activo} = userCredentials

    service.createUser(username, contrasenia, nombre, apellido, new Date(fechaNacimiento), cargo, activo).subscribe(result => {
      expect(result).toEqual(userResult)
    })
  });

  it('Retorna usuario nuevo cuando se hace el modificar usuario de forma correcta', () =>{

    const userCredentials = {
      username: 'Isabela01',
      nombre: 'Isabela',
      apellido: 'Jimenez',
      fechaNacimiento: '01/01/2000',
      cargo: 'Administrador',
      activo: true
    }

    const {username, nombre, apellido, fechaNacimiento, cargo, activo} = userCredentials

    expect(service.updateUser('Chafo', username, nombre, apellido, new Date(fechaNacimiento), cargo, activo)).toBeTruthy()
  });

  it('Retorna el usuario dado ese username', () =>{
    service.searchByUsername('Chafo').subscribe(result =>{
      expect(result.nombre).toBe('Martin')
    })
  });

  it('Elimina el usuario dado un username', () =>{
    service.deleteUserByUsername('Chafo').subscribe(result =>{
      expect(result.nombre).toBe('Martin')
    })
  });

  it('should be created', () => {
    service.searchAllUsers()
  });
});
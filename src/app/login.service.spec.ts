import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let cookies: CookieService
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LoginService(httpClientSpy as any, cookies);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Retorna usuario y token cuando se hace el login de forma correcta', () =>{

      const loginCredentials = {
        user: 'Chafo',
        password: 'xlchafoops1'
      }

      const loginResult = {
        user: 'Chafo',
        password: 'xlchafoops1',
        "token": service.getToken()
      }
      
      httpClientSpy.post.and.returnValue(of(loginResult));

      const {user, password} = loginCredentials

      service.login(user, password).subscribe(result => {
        expect(result).toEqual(loginResult)
      })
  });

  it('Retorna error 400 cuando se hace el login de forma incorrecta', () =>{

    const loginCredentials = {
      user: 'Chafo',
      password: ''
    }

    const loginResult = {
      status: 404
    }
    
    httpClientSpy.post.and.returnValue(of(loginResult));

    const {user, password} = loginCredentials

    service.login(user, password).subscribe(result => {
      expect(result.status).toEqual(loginResult.status)
    })
  });
});

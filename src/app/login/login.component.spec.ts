import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    const user = app.checkoutForm.controls['login']
    user.setValue('Chafo')

    expect(app.checkoutForm.invalid).toBeTrue();
  });

  it('Formulario valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let user = app.checkoutForm.controls['login']
    let password = app.checkoutForm.controls['password']
    user.setValue('Chafo')
    password.setValue('xlchafoops1')

    expect(app.checkoutForm.invalid).toBeFalse();
  });

  it('should create', () =>{
    component.onSubmit();
  })

  it('should create', () => {
    component.ngOnInit()
  });
});

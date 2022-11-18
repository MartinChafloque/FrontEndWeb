import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ModificarUsuarioComponent } from './modificar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModificarUsuarioComponent', () => {
  let component: ModificarUsuarioComponent;
  let fixture: ComponentFixture<ModificarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ ModificarUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () =>{
    component.onSubmit()
  })

  it('should create', () =>{
    component.ngOnInit();
  })
});
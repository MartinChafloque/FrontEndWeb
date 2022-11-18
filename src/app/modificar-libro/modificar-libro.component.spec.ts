import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ModificarLibroComponent } from './modificar-libro.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModificarLibroComponent', () => {
  let component: ModificarLibroComponent;
  let fixture: ComponentFixture<ModificarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ ModificarLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () =>{
    component.onSubmit();
  })

  it('should create', () =>{
    component.ngOnInit();
  })
});

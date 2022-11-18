import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { CrearLibroComponent } from './crear-libro.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CrearLibroComponent', () => {
  let component: CrearLibroComponent;
  let fixture: ComponentFixture<CrearLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ CrearLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () =>{
    component.onSubmit()
  })

  it('should create', () => {
    component.ngOnInit()
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books.component';
import { HttpClientModule } from '@angular/common/http';
import { Book } from './books';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [ BooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.ngOnInit()
  });

  it('should create', () => {
    component.fillBooksEditorial()
  });

  it('should create', () => {
    component.deleteBookById(1)
  });

  it('should create', () => {
    component.changePage(2)
  });
});
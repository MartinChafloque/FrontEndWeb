import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { EditorialComponent } from './editorial.component';
import { HttpClientModule } from '@angular/common/http';

describe('EditorialComponent', () => {
  let component: EditorialComponent;
  let fixture: ComponentFixture<EditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [ EditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.ngOnInit()
  });
});

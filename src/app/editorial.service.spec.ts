import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EditorialService } from './editorial.service';


describe('EditorialService', () => {
  let service: EditorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(EditorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Retorna la editorial dado ese id', () =>{
    service.searchById(3).subscribe(result =>{
      expect(result.name).toBe('Ediciones Baquiana')
    })
  });
});
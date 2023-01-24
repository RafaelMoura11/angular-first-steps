import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Animal from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = "http://localhost:3000/animals";
  
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
  
  remove(animal: Animal) {
    return this.http.delete(`${this.apiUrl}/${animal.id}`)
  }

  getOne(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}

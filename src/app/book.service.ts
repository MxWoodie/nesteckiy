import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/books';

  // TODO: Rewrite everything to store items in global storage not in component

  constructor(private http: HttpClient) { }
  
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.url}/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { Book } from './book';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private subject = new Subject();

  addBook(book: Book) {
    this.subject.next({operation: 'add', book: book});
  }

  removeBook(id: number) {
    this.subject.next({ operation: 'remove', id: id});
  }

  getBooks(): Observable<any> {
    return this.subject.asObservable();
  }
}

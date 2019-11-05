import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.css']
})
export class BookSectionComponent implements OnInit {
  books: Book[] = [];
  subscription: Subscription;

  constructor(
    private bookService: BookService,
    private communicationService: CommunicationService
    ) { }

  ngOnInit() {
    this.getBooks();
    this.subscription = this.communicationService.getBooks().subscribe(data => {
      if (data.operation === 'add') {
        this.bookService.addBook(data.book).subscribe(() => this.getBooks());
      } else  if (data.operation === 'remove'){
        this.bookService.deleteBook(data.id).subscribe(() => this.getBooks());
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => this.books = books);
  }
}
